import React, { useContext, useState } from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, IconButton, Rating, Typography } from '@mui/material';
import { Add, DeleteOutline, Favorite, FavoriteBorder, Remove, Rocket, Share } from '@mui/icons-material';
//helper
import { shorten, quantityCount, isInCart } from '../helper/function.js';
//context
import { reducerContext } from './ReducerProvider.jsx';

import { Link } from 'react-router-dom';

const CartProduct = ( { product } ) => {

    const { image, title, category, price, rating: { rate }, id } = product;
    const [rateProduct, setRateProduct] = useState(rate);
    const [favorite, setFavorite] = useState(false);
    const { state, dispatch } = useContext(reducerContext);

    return (
        <>
        <Card sx={{width: 230, height: 'auto', m: '12px', borderRadius: '8px', bgcolor: '#fff'}}>
            <Link style={{textDecoration: 'none', color: '#4993FA'}} to={`/productDetail/${id}`}>
            <CardActionArea>
                <Box sx={{display: 'flex',flexDirection: "column" , justifyContent: 'center', alignItems: 'center', width: 200, height: 250, margin: '85px auto 80px'}}>
                    <CardMedia component='img' image={image} alt='productImg' sx={{width: '170px', mb: '15px', mt: '25px', height: '220px'}} />
                    <CardContent>
                        <Typography variant='p' sx={{fontWeight: 600}}>{shorten(title)}</Typography>
                        <Box sx={{display: 'flex', mt: 1, alignItems: 'center'}}>
                            <Rating readOnly value={rateProduct} />
                            <Typography variant='p' sx={{mr: 1, fontFamily: 'Vazir', fontWeight: 700}}>{rate}</Typography>
                        </Box>
                        <Box sx={{mt: 1, display: 'flex',alignItems: 'center'}}>
                            <Rocket sx={{ml: 1}} color='primary' />
                            <Typography variant='p' sx={{fontWeight: 600, fontFamily: 'Vazir'}}>ارسال امروز</Typography>
                        </Box>
                        <Box sx={{mt: 2}}>
                            <Typography variant='p' sx={{fontWeight: 600}}>{price} $</Typography>
                        </Box>
                        <Box sx={{mt: 2}}>
                            <Typography color='primary' variant='p' sx={{fontFamily: 'Vazir', fontWeight: 600}}>دسته: {category}</Typography>
                        </Box>
                    </CardContent>
                </Box>
            <Divider sx={{mt: 1}} />
            </CardActionArea>
            </Link>
            <Box sx={{mr: 1, display: 'flex', justifyContent: 'space-between', ml: 1}}>
                <CardActions>
                    <IconButton onClick={() => setFavorite(!favorite)}>
                        {
                            favorite ?
                            <Favorite color='error' /> :
                            <FavoriteBorder color='action' />
                        }
                    </IconButton>
                    <IconButton>
                        <Share color='action' />
                    </IconButton>
                </CardActions>
                <CardActions>
                    {
                        quantityCount(state, product.id) >= 1 && <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <IconButton onClick={() => dispatch({type: 'INCREASE', payload: product})}><Add /></IconButton>
                            <Typography color='#19376D' sx={{fontWeight: 600, mr: 1, ml: 1}}>{quantityCount(state, product.id)}</Typography>
                            {
                                quantityCount(state, product.id) > 1 && <IconButton onClick={() => dispatch({type: 'DECREASE', payload: product})}><Remove /></IconButton>
                            }
                            {
                                quantityCount(state, product.id) === 1 && <IconButton onClick={() => dispatch({type: 'REMOVE_ITEM', payload: product})}><DeleteOutline /></IconButton>
                            }
                        </Box>
                    }
                    {
                        isInCart(state, product.id) && <Button onClick={() => dispatch({type: 'ADD_ITEM', payload: product})} disableElevation sx={{fontSize: '13px', fontWeight: 700}} variant='contained' size='small'>افزودن</Button>
                    }
                    
                </CardActions>
            </Box>
        </Card>
        </>
    );
};

export default CartProduct;