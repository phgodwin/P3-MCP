package com.LBG.legacy.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.LBG.legacy.domain.Cart;
import com.LBG.legacy.repo.CartRepo;

@Service
public class CartService {

	private CartRepo repo;

	public CartService(CartRepo repo) {
		super();
		this.repo = repo;
	}

	public ResponseEntity<Cart> createCart(Cart newCart) {
		Cart created = this.repo.save(newCart);
		return new ResponseEntity<Cart>(created, HttpStatus.CREATED);

	}

	public List<Cart> getCarts() {
		return this.repo.findAll();
	}

//	public ResponseEntity<Cart> getCart(int id) {
//		Optional<Cart> found = this.repo.findById(id);
//
//		if (found.isEmpty()) {
//			return new ResponseEntity<Cart>(HttpStatus.NOT_FOUND);
//		}
//
//		Cart body = found.get();
//
//		return ResponseEntity.ok(body);
//
//	}

	public ResponseEntity<Cart> updateCart(int id, Cart newCart) {
		Optional<Cart> found = this.repo.findById(id);

		if (found.isEmpty()) {
			return new ResponseEntity<Cart>(HttpStatus.NOT_FOUND);
		}

		Cart existing = found.get();

		if (newCart.getCustomer() != null) {
			existing.setCustomer(newCart.getCustomer());
		}

		Cart updated = this.repo.save(existing);

		return ResponseEntity.ok(updated);
	}

	public boolean remove(int id) {
		this.repo.deleteById(id);

		return !this.repo.existsById(id);
	}

}
