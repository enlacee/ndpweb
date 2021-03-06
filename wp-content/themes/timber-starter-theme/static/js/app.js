jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(a, b, c, d, e) {
		return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
	},
	easeInQuad: function(a, b, c, d, e) {
		return d * (b /= e) * b + c
	},
	easeOutQuad: function(a, b, c, d, e) {
		return -d * (b /= e) * (b - 2) + c
	},
	easeInOutQuad: function(a, b, c, d, e) {
		return 1 > (b /= e / 2) ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
	},
	easeInCubic: function(a, b, c, d, e) {
		return d * (b /= e) * b * b + c
	},
	easeOutCubic: function(a, b, c, d, e) {
		return d * ((b = b / e - 1) * b * b + 1) + c
	},
	easeInOutCubic: function(a, b, c, d, e) {
		return 1 > (b /= e / 2) ? d / 2 * b * b * b + c :
			d / 2 * ((b -= 2) * b * b + 2) + c
	},
	easeInQuart: function(a, b, c, d, e) {
		return d * (b /= e) * b * b * b + c
	},
	easeOutQuart: function(a, b, c, d, e) {
		return -d * ((b = b / e - 1) * b * b * b - 1) + c
	},
	easeInOutQuart: function(a, b, c, d, e) {
		return 1 > (b /= e / 2) ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
	},
	easeInQuint: function(a, b, c, d, e) {
		return d * (b /= e) * b * b * b * b + c
	},
	easeOutQuint: function(a, b, c, d, e) {
		return d * ((b = b / e - 1) * b * b * b * b + 1) + c
	},
	easeInOutQuint: function(a, b, c, d, e) {
		return 1 > (b /= e / 2) ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
	},
	easeInSine: function(a, b, c, d, e) {
		return -d * Math.cos(b /
			e * (Math.PI / 2)) + d + c
	},
	easeOutSine: function(a, b, c, d, e) {
		return d * Math.sin(b / e * (Math.PI / 2)) + c
	},
	easeInOutSine: function(a, b, c, d, e) {
		return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
	},
	easeInExpo: function(a, b, c, d, e) {
		return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
	},
	easeOutExpo: function(a, b, c, d, e) {
		return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
	},
	easeInOutExpo: function(a, b, c, d, e) {
		return 0 == b ? c : b == e ? c + d : 1 > (b /= e / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
	},
	easeInCirc: function(a, b, c, d, e) {
		return -d * (Math.sqrt(1 - (b /= e) *
			b) - 1) + c
	},
	easeOutCirc: function(a, b, c, d, e) {
		return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
	},
	easeInOutCirc: function(a, b, c, d, e) {
		return 1 > (b /= e / 2) ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
	},
	easeInElastic: function(a, b, c, d, e) {
		a = 1.70158;
		var g = 0,
			k = d;
		if (0 == b) return c;
		if (1 == (b /= e)) return c + d;
		g || (g = .3 * e);
		k < Math.abs(d) ? (k = d, a = g / 4) : a = g / (2 * Math.PI) * Math.asin(d / k);
		return -(k * Math.pow(2, 10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / g)) + c
	},
	easeOutElastic: function(a, b, c, d, e) {
		a = 1.70158;
		var g = 0,
			k = d;
		if (0 == b) return c;
		if (1 == (b /=
				e)) return c + d;
		g || (g = .3 * e);
		k < Math.abs(d) ? (k = d, a = g / 4) : a = g / (2 * Math.PI) * Math.asin(d / k);
		return k * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - a) * Math.PI / g) + d + c
	},
	easeInOutElastic: function(a, b, c, d, e) {
		a = 1.70158;
		var g = 0,
			k = d;
		if (0 == b) return c;
		if (2 == (b /= e / 2)) return c + d;
		g || (g = .3 * e * 1.5);
		k < Math.abs(d) ? (k = d, a = g / 4) : a = g / (2 * Math.PI) * Math.asin(d / k);
		return 1 > b ? -.5 * k * Math.pow(2, 10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / g) + c : .5 * k * Math.pow(2, -10 * --b) * Math.sin(2 * (b * e - a) * Math.PI / g) + d + c
	},
	easeInBack: function(a, b, c, d, e, g) {
		void 0 == g && (g = 1.70158);
		return d * (b /= e) * b * ((g + 1) * b - g) + c
	},
	easeOutBack: function(a, b, c, d, e, g) {
		void 0 == g && (g = 1.70158);
		return d * ((b = b / e - 1) * b * ((g + 1) * b + g) + 1) + c
	},
	easeInOutBack: function(a, b, c, d, e, g) {
		void 0 == g && (g = 1.70158);
		return 1 > (b /= e / 2) ? d / 2 * b * b * (((g *= 1.525) + 1) * b - g) + c : d / 2 * ((b -= 2) * b * (((g *= 1.525) + 1) * b + g) + 2) + c
	},
	easeInBounce: function(a, b, c, d, e) {
		return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
	},
	easeOutBounce: function(a, b, c, d, e) {
		return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -=
			2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
	},
	easeInOutBounce: function(a, b, c, d, e) {
		return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
	}
});
(function(a) {
	a.fn.supersubs = function(b) {
		var c = a.extend({}, a.fn.supersubs.defaults, b);
		return this.each(function() {
			var b = a(this),
				e = a.meta ? a.extend({}, c, b.data()) : c,
				g = a('<li id="menu-fontsize">&#8212;</li>').css({
					padding: 0,
					position: "absolute",
					top: "-999em",
					width: "auto"
				}).appendTo(b).width();
			a("#menu-fontsize").remove();
			$ULs = b.find("ul");
			$ULs.each(function(b) {
				b = $ULs.eq(b);
				var c = b.children(),
					d = c.children("a"),
					x = c.css("white-space", "nowrap").css("float"),
					z = b.add(c).add(d).css({
						"float": "none",
						width: "auto"
					}).end().end()[0].clientWidth /
					g,
					z = z + e.extraWidth;
				z > e.maxWidth ? z = e.maxWidth : z < e.minWidth && (z = e.minWidth);
				z += "em";
				b.css("width", z);
				c.css({
					"float": x,
					width: "100%",
					"white-space": "normal"
				}).each(function() {
					var b = a(">ul", this),
						c = void 0 !== b.css("left") ? "left" : "right";
					b.css(c, z)
				})
			})
		})
	};
	a.fn.supersubs.defaults = {
		minWidth: 9,
		maxWidth: 25,
		extraWidth: 0
	}
})(jQuery);
(function(a) {
	a.fn.hoverIntent = function(b, c, d) {
		var e = {
				interval: 100,
				sensitivity: 7,
				timeout: 0
			},
			e = "object" === typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
				over: b,
				out: c,
				selector: d
			}) : a.extend(e, {
				over: b,
				out: b,
				selector: c
			}),
			g, k, f, p, x = function(a) {
				g = a.pageX;
				k = a.pageY
			},
			z = function(b, c) {
				c.hoverIntent_t = clearTimeout(c.hoverIntent_t);
				if (Math.abs(f - g) + Math.abs(p - k) < e.sensitivity) return a(c).off("mousemove.hoverIntent", x), c.hoverIntent_s = 1, e.over.apply(c, [b]);
				f = g;
				p = k;
				c.hoverIntent_t = setTimeout(function() {
						z(b, c)
					},
					e.interval)
			};
		b = function(b) {
			var c = jQuery.extend({}, b),
				d = this;
			d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t));
			"mouseenter" == b.type ? (f = c.pageX, p = c.pageY, a(d).on("mousemove.hoverIntent", x), 1 != d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
				z(c, d)
			}, e.interval))) : (a(d).off("mousemove.hoverIntent", x), 1 == d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
				d.hoverIntent_t = clearTimeout(d.hoverIntent_t);
				d.hoverIntent_s = 0;
				e.out.apply(d, [c])
			}, e.timeout)))
		};
		return this.on({
			"mouseenter.hoverIntent": b,
			"mouseleave.hoverIntent": b
		}, e.selector)
	}
})(jQuery);
(function(a) {
	a.fn.superfish = function(b) {
		var d = a.fn.superfish,
			e = d.c,
			g = a('<i class="' + e.arrowClass + '"></i>'),
			k = function() {
				var b = a(this),
					c = p(b);
				clearTimeout(c.sfTimer);
				b.showSuperfishUl().siblings().hideSuperfishUl()
			},
			f = function(b) {
				var c = a(this),
					e = p(c),
					f = d.op,
					g = function() {
						f.retainPath = -1 < a.inArray(c[0], f.$path);
						c.hideSuperfishUl();
						f.$path.length && 1 > c.parents("li." + f.hoverClass).length && (f.onIdle.call(), a.proxy(k, f.$path, b)())
					};
				"click" === b.type ? g() : (clearTimeout(e.sfTimer), e.sfTimer = setTimeout(g, f.delay))
			},
			p = function(b) {
				b.hasClass(e.menuClass) && a.error("Superfish requires you to update to a version of hoverIntent that supports event-delegation, such as this one: https://github.com/joeldbirch/onHoverIntent");
				b = b.closest("." + e.menuClass)[0];
				d.op = d.o[b.serial];
				return b
			},
			x = function(b) {
				var c = a(this),
					d = c.siblings("ul");
				if (0 < d.length && !d.is(":visible") && (c.data("follow", !1), "MSPointerDown" === b.type)) return c.trigger("focus"), !1
			},
			z = function(b) {
				var c = a(this),
					e = c.siblings("ul"),
					g = !1 === c.data("follow") ? !1 : !0;
				!e.length || !d.op.useClick && g || (b.preventDefault(), e.is(":visible") ? d.op.useClick && g && a.proxy(f, c.parent("li"), b)() : a.proxy(k, c.parent("li"))())
			};
		return this.addClass(e.menuClass).each(function() {
			var p = this.serial = d.o.length,
				q = a.extend({}, d.defaults, b),
				C = a(this),
				D = C.find("li:has(ul)");
			q.$path = C.find("li." + q.pathClass).slice(0, q.pathLevels).each(function() {
				a(this).addClass(q.hoverClass + " " + e.bcClass).filter("li:has(ul)").removeClass(q.pathClass)
			});
			d.o[p] = d.op = q;
			q.autoArrows && D.children("a").each(function() {
				a(this).addClass(e.anchorClass).append(g.clone())
			});
			C.css("ms-touch-action", "none");
			if (!d.op.useClick)
				if (a.fn.hoverIntent && !d.op.disableHI) C.hoverIntent(k, f, "li:has(ul)");
				else C.on("mouseenter", "li:has(ul)", k).on("mouseleave", "li:has(ul)", f);
			p = "MSPointerDown";
			navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/) || (p += " touchstart");
			C.on("focusin", "li", k).on("focusout", "li", f).on("click", "a", z).on(p, "a", x);
			D.not("." + e.bcClass).children("ul").show().hide();
			q.onInit.call(this)
		})
	};
	var b = a.fn.superfish;
	b.o = [];
	b.op = {};
	b.c = {
		bcClass: "sf-breadcrumb",
		menuClass: "sf-js-enabled",
		anchorClass: "sf-with-ul",
		arrowClass: "td-icon-menu-down"
	};
	b.defaults = {
		hoverClass: "sfHover",
		pathClass: "overideThisToUse",
		pathLevels: 1,
		delay: 800,
		animation: {
			opacity: "show"
		},
		animationOut: {
			opacity: "hide"
		},
		speed: "normal",
		speedOut: "fast",
		autoArrows: !0,
		disableHI: !1,
		useClick: !1,
		onInit: function() {},
		onBeforeShow: function() {},
		onShow: function() {},
		onHide: function() {},
		onIdle: function() {}
	};
	a.fn.extend({
		hideSuperfishUl: function() {
			var c = b.op,
				d = this,
				e = !0 === c.retainPath ? c.$path : "";
			c.retainPath = !1;
			a("li." + c.hoverClass, this).add(this).not(e).children("ul").stop(!0, !0).animate(c.animationOut, c.speedOut, function() {
				$ul = a(this);
				$ul.parent().removeClass(c.hoverClass);
				c.onHide.call($ul);
				b.op.useClick && d.children("a").data("follow", !1)
			});
			return this
		},
		showSuperfishUl: function() {
			var c = b.op,
				d = this,
				e = this.children("ul");
			d.addClass(c.hoverClass);
			c.onBeforeShow.call(e);
			e.stop(!0, !0).animate(c.animation, c.speed, function() {
				c.onShow.call(e);
				d.children("a").data("follow", !0)
			});
			var g = a(window).width(),
				k = this.children("ul").first();
			if (0 < k.length) {
				var f = this.children("ul").first().offset().left + k.width();
				f > g && (k.parent().parent().hasClass("sf-menu") ? k.css("left", "-" + (f - g) + "px") : k.addClass("reversed").css("left", "-" + (k.width() + 0) + "px"))
			}
			return this
		}
	})
})(jQuery);
(function(a) {
	var b = 0,
		c = 0,
		d = 0,
		e = 0,
		g = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints,
		k = "onorientationchange" in window,
		f = !1,
		p = !1,
		x = !1,
		z = !1,
		t = !1,
		q = "pointer",
		C = "pointer",
		D = [],
		I = [],
		ma = [],
		T = [],
		K = [],
		aa = [],
		M = [],
		n = [],
		y = [],
		V = [],
		ga = [],
		l = {
			showScrollbar: function(b, c) {
				b.scrollbarHide && a("." + c).css({
					opacity: b.scrollbarOpacity,
					filter: "alpha(opacity:" + 100 * b.scrollbarOpacity + ")"
				})
			},
			hideScrollbar: function(a, b, c, d, e, h, f, g, k, p) {
				if (a.scrollbar && a.scrollbarHide)
					for (var x = c; x < c + 25; x++) b[b.length] = l.hideScrollbarIntervalTimer(10 *
						x, d[c], (c + 24 - x) / 24, e, h, f, g, k, p, a)
			},
			hideScrollbarInterval: function(b, c, d, f, g, h, k, p, x) {
				e = -1 * b / y[p] * (g - h - k - f);
				l.setSliderOffset("." + d, e);
				a("." + d).css({
					opacity: x.scrollbarOpacity * c,
					filter: "alpha(opacity:" + x.scrollbarOpacity * c * 100 + ")"
				})
			},
			slowScrollHorizontalInterval: function(b, c, d, f, g, h, k, p, x, C, N, q, z, P, E, A, t, w, v) {
				if (v.infiniteSlider) {
					if (d <= -1 * y[A]) {
						var B = a(b).width();
						if (d <= -1 * V[A]) {
							var F = -1 * N[0];
							a(c).each(function(b) {
								l.setSliderOffset(a(c)[b], F + t);
								b < q.length && (q[b] = -1 * F);
								F += E[b]
							});
							d += -1 * q[0];
							n[A] = -1 * q[0] +
								t;
							y[A] = n[A] + B - h;
							M[A] = 0
						} else {
							var u = 0,
								L = l.getSliderOffset(a(c[0]), "x");
							a(c).each(function(a) {
								l.getSliderOffset(this, "x") < L && (L = l.getSliderOffset(this, "x"), u = a)
							});
							z = n[A] + B;
							l.setSliderOffset(a(c)[u], z);
							n[A] = -1 * q[1] + t;
							y[A] = n[A] + B - h;
							q.splice(0, 1);
							q.splice(q.length, 0, -1 * z + t);
							M[A]++
						}
					}
					if (d >= -1 * n[A] || 0 <= d) {
						B = a(b).width();
						if (0 < d)
							for (F = -1 * N[0], a(c).each(function(b) {
									l.setSliderOffset(a(c)[b], F + t);
									b < q.length && (q[b] = -1 * F);
									F += E[b]
								}), d -= -1 * q[0], n[A] = -1 * q[0] + t, y[A] = n[A] + B - h, M[A] = P; 0 < -1 * q[0] - B + t;) {
								var da = 0,
									D = l.getSliderOffset(a(c[0]),
										"x");
								a(c).each(function(a) {
									l.getSliderOffset(this, "x") > D && (D = l.getSliderOffset(this, "x"), da = a)
								});
								z = n[A] - E[da];
								l.setSliderOffset(a(c)[da], z);
								q.splice(0, 0, -1 * z + t);
								q.splice(q.length - 1, 1);
								n[A] = -1 * q[0] + t;
								y[A] = n[A] + B - h;
								M[A]--;
								K[A]++
							}
						0 > d && (da = 0, D = l.getSliderOffset(a(c[0]), "x"), a(c).each(function(a) {
							l.getSliderOffset(this, "x") > D && (D = l.getSliderOffset(this, "x"), da = a)
						}), z = n[A] - E[da], l.setSliderOffset(a(c)[da], z), q.splice(0, 0, -1 * z + t), q.splice(q.length - 1, 1), n[A] = -1 * q[0] + t, y[A] = n[A] + B - h, M[A]--)
					}
				}
				N = !1;
				h = l.calcActiveOffset(v,
					d, q, h, M[A], P, C, A);
				z = (h + M[A] + P) % P;
				v.infiniteSlider ? z != aa[A] && (N = !0) : h != K[A] && (N = !0);
				if (N && (P = new l.args("change", v, b, a(b).children(":eq(" + z + ")"), z, w), a(b).parent().data("args", P), "" != v.onSlideChange)) v.onSlideChange(P);
				K[A] = h;
				aa[A] = z;
				d = Math.floor(d);
				l.setSliderOffset(b, d);
				v.scrollbar && (e = Math.floor((-1 * d - n[A] + t) / (y[A] - n[A] + t) * (k - p - g)), b = g - x, d >= -1 * n[A] + t ? (b = g - x - -1 * e, l.setSliderOffset(a("." + f), 0)) : (d <= -1 * y[A] + 1 && (b = k - p - x - e), l.setSliderOffset(a("." + f), e)), a("." + f).css({
					width: b + "px"
				}))
			},
			slowScrollHorizontal: function(b,
				c, d, e, f, h, g, k, p, x, q, z, C, P, E, A, t, w, v, B, F) {
				var u = l.getSliderOffset(b, "x");
				h = [];
				var L = 0,
					D = 25 / 1024 * k;
				frictionCoefficient = F.frictionCoefficient;
				elasticFrictionCoefficient = F.elasticFrictionCoefficient;
				snapFrictionCoefficient = F.snapFrictionCoefficient;
				f > F.snapVelocityThreshold && F.snapToChildren && !v ? L = 1 : f < -1 * F.snapVelocityThreshold && F.snapToChildren && !v && (L = -1);
				f < -1 * D ? f = -1 * D : f > D && (f = D);
				a(b)[0] !== a(w)[0] && (L *= -1, f *= -2);
				w = M[E];
				if (F.infiniteSlider) var I = n[E],
					r = y[E];
				v = [];
				for (var D = [], J = 0; J < C.length; J++) v[J] =
					C[J], J < c.length && (D[J] = l.getSliderOffset(a(c[J]), "x"));
				for (; 1 < f || -1 > f;) {
					f *= frictionCoefficient;
					u += f;
					(u > -1 * n[E] || u < -1 * y[E]) && !F.infiniteSlider && (f *= elasticFrictionCoefficient, u += f);
					if (F.infiniteSlider) {
						if (u <= -1 * r) {
							for (var r = a(b).width(), V = 0, W = D[0], J = 0; J < D.length; J++) D[J] < W && (W = D[J], V = J);
							J = I + r;
							D[V] = J;
							I = -1 * v[1] + B;
							r = I + r - k;
							v.splice(0, 1);
							v.splice(v.length, 0, -1 * J + B);
							w++
						}
						if (u >= -1 * I) {
							r = a(b).width();
							V = 0;
							W = D[0];
							for (J = 0; J < D.length; J++) D[J] > W && (W = D[J], V = J);
							J = I - P[V];
							D[V] = J;
							v.splice(0, 0, -1 * J + B);
							v.splice(v.length -
								1, 1);
							I = -1 * v[0] + B;
							r = I + r - k;
							w--
						}
					}
					h[h.length] = u
				}
				D = !1;
				f = l.calcActiveOffset(F, u, v, k, w, t, K[E], E);
				F.snapToChildren && (F.infiniteSlider ? (f + w + t) % t != aa[E] && (D = !0) : f != K[E] && (D = !0), 0 > L && !D ? (f++, f >= C.length && !F.infiniteSlider && (f = C.length - 1)) : 0 < L && !D && (f--, 0 > f && !F.infiniteSlider && (f = 0)));
				if (F.snapToChildren || (u > -1 * n[E] || u < -1 * y[E]) && !F.infiniteSlider) {
					for ((u > -1 * n[E] || u < -1 * y[E]) && !F.infiniteSlider ? h.splice(0, h.length) : (h.splice(.1 * h.length, h.length), u = 0 < h.length ? h[h.length - 1] : u); u < v[f] - .5 || u > v[f] + .5;) u = (u - v[f]) * snapFrictionCoefficient +
						v[f], h[h.length] = u;
					h[h.length] = v[f]
				}
				L = 1;
				0 != h.length % 2 && (L = 0);
				for (u = 0; u < d.length; u++) clearTimeout(d[u]);
				w = (f + w + t) % t;
				I = 0;
				for (u = L; u < h.length; u += 2)
					if (u == L || 1 < Math.abs(h[u] - I) || u >= h.length - 2) I = h[u], d[d.length] = l.slowScrollHorizontalIntervalTimer(10 * u, b, c, h[u], e, g, k, p, x, q, f, z, C, A, t, P, E, B, w, F);
				I = (f + M[E] + t) % t;
				"" != F.onSlideComplete && 1 < h.length && (d[d.length] = l.onSlideCompleteTimer(10 * (u + 1), F, b, a(b).children(":eq(" + I + ")"), w, E));
				T[E] = d;
				l.hideScrollbar(F, d, u, h, e, g, k, x, q, E)
			},
			onSlideComplete: function(b, c, d, e, f) {
				d =
					new l.args("complete", b, a(c), d, e, e);
				a(c).parent().data("args", d);
				if ("" != b.onSlideComplete) b.onSlideComplete(d)
			},
			getSliderOffset: function(b, c) {
				var d;
				c = "x" == c ? 4 : 5;
				if (!f || p || x) d = parseInt(a(b).css("left"), 10);
				else {
					d = ["-webkit-transform", "-moz-transform", "transform"];
					for (var e, g = 0; g < d.length; g++)
						if (void 0 != a(b).css(d[g]) && 0 < a(b).css(d[g]).length) {
							e = a(b).css(d[g]).split(",");
							break
						}
					d = void 0 == e[c] ? 0 : parseInt(e[c], 10)
				}
				return d
			},
			setSliderOffset: function(b, c) {
				c = parseInt(c, 10);
				!f || p || x ? a(b).css({
						left: c + "px"
					}) :
					a(b).css({
						msTransform: "matrix(1,0,0,1," + c + ",0)",
						webkitTransform: "matrix(1,0,0,1," + c + ",0)",
						MozTransform: "matrix(1,0,0,1," + c + ",0)",
						transform: "matrix(1,0,0,1," + c + ",0)"
					})
			},
			setBrowserInfo: function() {
				null != navigator.userAgent.match("WebKit") ? (q = "-webkit-grab", C = "-webkit-grabbing") : null != navigator.userAgent.match("Gecko") ? (t = !0, q = "move", C = "-moz-grabbing") : null != navigator.userAgent.match("MSIE 7") ? z = p = !0 : null != navigator.userAgent.match("MSIE 8") ? z = x = !0 : null != navigator.userAgent.match("MSIE 9") && (z = !0)
			},
			has3DTransform: function() {
				var b = !1,
					c = a("<div />").css({
						msTransform: "matrix(1,1,1,1,1,1)",
						webkitTransform: "matrix(1,1,1,1,1,1)",
						MozTransform: "matrix(1,1,1,1,1,1)",
						transform: "matrix(1,1,1,1,1,1)"
					});
				"" == c.attr("style") ? b = !1 : t && 21 <= parseInt(navigator.userAgent.split("/")[3], 10) ? b = !1 : void 0 != c.attr("style") && (b = !0);
				return b
			},
			getSlideNumber: function(a, b, c) {
				return (a - M[b] + c) % c
			},
			calcActiveOffset: function(a, b, c, d, e, f, g, k) {
				e = !1;
				a = [];
				var p;
				b > c[0] && (p = 0);
				b < c[c.length - 1] && (p = f - 1);
				for (f = 0; f < c.length; f++) c[f] <= b && c[f] > b - d && (e || c[f] == b || (a[a.length] =
					c[f - 1]), a[a.length] = c[f], e = !0);
				0 == a.length && (a[0] = c[c.length - 1]);
				for (f = e = 0; f < a.length; f++) g = Math.abs(b - a[f]), g < d && (e = a[f], d = g);
				for (f = 0; f < c.length; f++) e == c[f] && (p = f);
				return p
			},
			changeSlide: function(b, c, d, e, f, h, g, k, p, x, q, z, C, n, t, A, D, w) {
				l.autoSlidePause(n);
				for (var v = 0; v < e.length; v++) clearTimeout(e[v]);
				var B = Math.ceil(w.autoSlideTransTimer / 10) + 1,
					y = l.getSliderOffset(c, "x"),
					u = z[b],
					L = u - y;
				if (w.infiniteSlider)
					for (b = (b - M[n] + 2 * A) % A, v = !1, 0 == b && 2 == A && (b = A, z[b] = z[b - 1] - a(d).eq(0).outerWidth(!0), v = !0), u = z[b], L = u -
						y, u = [z[b] - a(c).width(), z[b] + a(c).width()], v && z.splice(z.length - 1, 1), v = 0; v < u.length; v++) Math.abs(u[v] - y) < Math.abs(L) && (L = u[v] - y);
				var u = [],
					I;
				l.showScrollbar(w, f);
				for (v = 0; v <= B; v++) I = v, I /= B, I--, I = y + L * (Math.pow(I, 5) + 1), u[u.length] = I;
				B = (b + M[n] + A) % A;
				for (v = y = 0; v < u.length; v++) {
					if (0 == v || 1 < Math.abs(u[v] - y) || v >= u.length - 2) y = u[v], e[v] = l.slowScrollHorizontalIntervalTimer(10 * (v + 1), c, d, u[v], f, h, g, k, p, x, b, q, z, t, A, C, n, D, B, w);
					0 == v && "" != w.onSlideStart && (L = (K[n] + M[n] + A) % A, w.onSlideStart(new l.args("start", w, c, a(c).children(":eq(" +
						L + ")"), L, b)))
				}
				y = !1;
				w.infiniteSlider ? B != aa[n] && (y = !0) : b != K[n] && (y = !0);
				y && "" != w.onSlideComplete && (e[e.length] = l.onSlideCompleteTimer(10 * (v + 1), w, c, a(c).children(":eq(" + B + ")"), B, n));
				T[n] = e;
				l.hideScrollbar(w, e, v, u, f, h, g, p, x, n);
				l.autoSlide(c, d, e, f, h, g, k, p, x, q, z, C, n, t, A, D, w)
			},
			autoSlide: function(a, b, c, d, e, f, g, k, p, x, q, z, n, C, t, A, y) {
				if (!I[n].autoSlide) return !1;
				l.autoSlidePause(n);
				D[n] = setTimeout(function() {
					!y.infiniteSlider && K[n] > q.length - 1 && (K[n] -= t);
					l.changeSlide((K[n] + M[n] + q.length + 1) % q.length, a, b, c, d, e,
						f, g, k, p, x, q, z, n, C, t, A, y);
					l.autoSlide(a, b, c, d, e, f, g, k, p, x, q, z, n, C, t, A, y)
				}, y.autoSlideTimer + y.autoSlideTransTimer)
			},
			autoSlidePause: function(a) {
				clearTimeout(D[a])
			},
			isUnselectable: function(b, c) {
				return "" != c.unselectableSelector && 1 == a(b).closest(c.unselectableSelector).length ? !0 : !1
			},
			slowScrollHorizontalIntervalTimer: function(a, b, c, d, e, f, g, k, p, x, q, n, z, C, t, y, D, w, v, B) {
				return setTimeout(function() {
					l.slowScrollHorizontalInterval(b, c, d, e, f, g, k, p, x, q, n, z, C, t, y, D, w, v, B)
				}, a)
			},
			onSlideCompleteTimer: function(a, b, c,
				d, e, f) {
				return setTimeout(function() {
					l.onSlideComplete(b, c, d, e, f)
				}, a)
			},
			hideScrollbarIntervalTimer: function(a, b, c, d, e, f, g, k, p, x) {
				return setTimeout(function() {
					l.hideScrollbarInterval(b, c, d, e, f, g, k, p, x)
				}, a)
			},
			args: function(b, c, d, e, f, g) {
				this.prevSlideNumber = void 0 == a(d).parent().data("args") ? void 0 : a(d).parent().data("args").prevSlideNumber;
				this.prevSlideObject = void 0 == a(d).parent().data("args") ? void 0 : a(d).parent().data("args").prevSlideObject;
				this.targetSlideNumber = g + 1;
				this.targetSlideObject = a(d).children(":eq(" +
					g + ")");
				this.slideChanged = !1;
				"load" == b ? this.targetSlideObject = this.targetSlideNumber = void 0 : "start" == b ? this.targetSlideObject = this.targetSlideNumber = void 0 : "change" == b ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == a(d).parent().data("args") ? c.startAtSlide : a(d).parent().data("args").currentSlideNumber, this.prevSlideObject = a(d).children(":eq(" + this.prevSlideNumber + ")")) : "complete" == b && (this.slideChanged = a(d).parent().data("args").slideChanged);
				this.settings = c;
				this.data = a(d).parent().data("iosslider");
				this.sliderObject = d;
				this.sliderContainerObject = a(d).parent();
				this.currentSlideObject = e;
				this.currentSlideNumber = f + 1;
				this.currentSliderOffset = -1 * l.getSliderOffset(d, "x")
			},
			preventDrag: function(a) {
				a.preventDefault()
			},
			preventClick: function(a) {
				a.stopImmediatePropagation();
				return !1
			},
			enableClick: function() {
				return !0
			}
		};
	l.setBrowserInfo();
	var X = {
		init: function(Q, t) {
			f = l.has3DTransform();
			var m = a.extend(!0, {
				elasticPullResistance: .6,
				frictionCoefficient: .92,
				elasticFrictionCoefficient: .6,
				snapFrictionCoefficient: .92,
				snapToChildren: !1,
				snapSlideCenter: !1,
				startAtSlide: 1,
				scrollbar: !1,
				scrollbarDrag: !1,
				scrollbarHide: !0,
				scrollbarLocation: "top",
				scrollbarContainer: "",
				scrollbarOpacity: .4,
				scrollbarHeight: "4px",
				scrollbarBorder: "0",
				scrollbarMargin: "5px",
				scrollbarBackground: "#000",
				scrollbarBorderRadius: "100px",
				scrollbarShadow: "0 0 0 #000",
				scrollbarElasticPullResistance: .9,
				desktopClickDrag: !1,
				keyboardControls: !1,
				tabToAdvance: !1,
				responsiveSlideContainer: !0,
				responsiveSlides: !0,
				navSlideSelector: "",
				navPrevSelector: "",
				navNextSelector: "",
				autoSlideToggleSelector: "",
				autoSlide: !1,
				autoSlideTimer: 5E3,
				autoSlideTransTimer: 750,
				autoSlideHoverPause: !0,
				infiniteSlider: !1,
				snapVelocityThreshold: 5,
				slideStartVelocityThreshold: 0,
				horizontalSlideLockThreshold: 5,
				verticalSlideLockThreshold: 3,
				stageCSS: {
					position: "relative",
					top: "0",
					left: "0",
					overflow: "hidden",
					zIndex: 1
				},
				unselectableSelector: "",
				onSliderLoaded: "",
				onSliderUpdate: "",
				onSliderResize: "",
				onSlideStart: "",
				onSlideChange: "",
				onSlideComplete: ""
			}, Q);
			void 0 == t && (t = this);
			return a(t).each(function(f) {
				function ha() {
					l.autoSlidePause(h);
					xa = a(G).find("a");
					Ca = a(G).find("[onclick]");
					ra = a(G).find("*");
					a(v).css("width", "");
					a(v).css("height", "");
					a(G).css("width", "");
					H = a(G).children().not("script").get();
					ka = [];
					S = [];
					m.responsiveSlides && a(H).css("width", "");
					y[h] = 0;
					r = [];
					A = a(v).parent().width();
					B = a(v).outerWidth(!0);
					m.responsiveSlideContainer && (B = a(v).outerWidth(!0) > A ? A : a(v).width());
					a(v).css({
						position: m.stageCSS.position,
						top: m.stageCSS.top,
						left: m.stageCSS.left,
						overflow: m.stageCSS.overflow,
						zIndex: m.stageCSS.zIndex,
						webkitPerspective: 1E3,
						webkitBackfaceVisibility: "hidden",
						msTouchAction: "pan-y",
						width: B
					});
					a(m.unselectableSelector).css({
						cursor: "default"
					});
					for (var b = 0; b < H.length; b++) {
						ka[b] = a(H[b]).width();
						S[b] = a(H[b]).outerWidth(!0);
						var c = S[b];
						m.responsiveSlides && (S[b] > B ? (c = B + -1 * (S[b] - ka[b]), ka[b] = c, S[b] = B) : c = ka[b], a(H[b]).css({
							width: c
						}));
						a(H[b]).css({
							webkitBackfaceVisibility: "hidden",
							overflow: "hidden",
							position: "absolute"
						});
						r[b] = -1 * y[h];
						y[h] = y[h] + c + (S[b] - ka[b])
					}
					m.snapSlideCenter && (w = .5 * (B - S[0]), m.responsiveSlides && S[0] > B && (w = 0));
					V[h] = 2 * y[h];
					for (b = 0; b < H.length; b++) l.setSliderOffset(a(H[b]), -1 * r[b] + y[h] + w), r[b] -= y[h];
					if (!m.infiniteSlider && !m.snapSlideCenter) {
						for (b = 0; b < r.length && !(r[b] <= -1 * (2 * y[h] - B)); b++) Da = b;
						r.splice(Da + 1, r.length);
						r[r.length] = -1 * (2 * y[h] - B)
					}
					for (b = 0; b < r.length; b++) J[b] = r[b];
					va && (I[h].startAtSlide = I[h].startAtSlide > r.length ? r.length : I[h].startAtSlide, m.infiniteSlider ? (I[h].startAtSlide = (I[h].startAtSlide - 1 + O) % O, K[h] = I[h].startAtSlide) : (I[h].startAtSlide = 0 > I[h].startAtSlide - 1 ? r.length - 1 : I[h].startAtSlide, K[h] = I[h].startAtSlide - 1), aa[h] = K[h]);
					n[h] = y[h] + w;
					a(G).css({
						position: "relative",
						cursor: q,
						webkitPerspective: "0",
						webkitBackfaceVisibility: "hidden",
						width: y[h] + "px"
					});
					ca = y[h];
					y[h] = 2 * y[h] - B + 2 * w;
					(ea = ca + w < B || 0 == B ? !0 : !1) && a(G).css({
						cursor: "default"
					});
					X = a(v).parent().outerHeight(!0);
					F = a(v).height();
					m.responsiveSlideContainer && (F = F > X ? X : F);
					a(v).css({
						height: F
					});
					l.setSliderOffset(G, r[K[h]]);
					if (m.infiniteSlider && !ea) {
						b = l.getSliderOffset(a(G), "x");
						for (c = (M[h] + O) % O * -1; 0 > c;) {
							var d = 0,
								e = l.getSliderOffset(a(H[0]), "x");
							a(H).each(function(a) {
								l.getSliderOffset(this, "x") < e && (e = l.getSliderOffset(this,
									"x"), d = a)
							});
							var f = n[h] + ca;
							l.setSliderOffset(a(H)[d], f);
							n[h] = -1 * r[1] + w;
							y[h] = n[h] + ca - B;
							r.splice(0, 1);
							r.splice(r.length, 0, -1 * f + w);
							c++
						}
						for (; 0 < -1 * r[0] - ca + w && m.snapSlideCenter && va;) {
							var g = 0,
								R = l.getSliderOffset(a(H[0]), "x");
							a(H).each(function(a) {
								l.getSliderOffset(this, "x") > R && (R = l.getSliderOffset(this, "x"), g = a)
							});
							f = n[h] - S[g];
							l.setSliderOffset(a(H)[g], f);
							r.splice(0, 0, -1 * f + w);
							r.splice(r.length - 1, 1);
							n[h] = -1 * r[0] + w;
							y[h] = n[h] + ca - B;
							M[h]--;
							K[h]++
						}
						for (; b <= -1 * y[h];) d = 0, e = l.getSliderOffset(a(H[0]), "x"), a(H).each(function(a) {
							l.getSliderOffset(this,
								"x") < e && (e = l.getSliderOffset(this, "x"), d = a)
						}), f = n[h] + ca, l.setSliderOffset(a(H)[d], f), n[h] = -1 * r[1] + w, y[h] = n[h] + ca - B, r.splice(0, 1), r.splice(r.length, 0, -1 * f + w), M[h]++, K[h]--
					}
					l.setSliderOffset(G, r[K[h]]);
					m.desktopClickDrag || a(G).css({
						cursor: "default"
					});
					m.scrollbar && (a("." + U).css({
						margin: m.scrollbarMargin,
						overflow: "hidden",
						display: "none"
					}), a("." + U + " ." + N).css({
						border: m.scrollbarBorder
					}), u = parseInt(a("." + U).css("marginLeft")) + parseInt(a("." + U).css("marginRight")), L = parseInt(a("." + U + " ." + N).css("borderLeftWidth"),
						10) + parseInt(a("." + U + " ." + N).css("borderRightWidth"), 10), P = "" != m.scrollbarContainer ? a(m.scrollbarContainer).width() : B, E = B / ca * (P - u), m.scrollbarHide || (wa = m.scrollbarOpacity), a("." + U).css({
						position: "absolute",
						left: 0,
						width: P - u + "px",
						margin: m.scrollbarMargin
					}), "top" == m.scrollbarLocation ? a("." + U).css("top", "0") : a("." + U).css("bottom", "0"), a("." + U + " ." + N).css({
						borderRadius: m.scrollbarBorderRadius,
						background: m.scrollbarBackground,
						height: m.scrollbarHeight,
						width: E - L + "px",
						minWidth: m.scrollbarHeight,
						border: m.scrollbarBorder,
						webkitPerspective: 1E3,
						webkitBackfaceVisibility: "hidden",
						position: "relative",
						opacity: wa,
						filter: "alpha(opacity:" + 100 * wa + ")",
						boxShadow: m.scrollbarShadow
					}), l.setSliderOffset(a("." + U + " ." + N), Math.floor((-1 * r[K[h]] - n[h] + w) / (y[h] - n[h] + w) * (P - u - E))), a("." + U).css({
						display: "block"
					}), Y = a("." + U + " ." + N), Ba = a("." + U));
					m.scrollbarDrag && !ea && a("." + U + " ." + N).css({
						cursor: q
					});
					m.infiniteSlider && (Z = (y[h] + B) / 3);
					"" != m.navSlideSelector && a(m.navSlideSelector).each(function(b) {
						a(this).css({
							cursor: "pointer"
						});
						a(this).unbind(ba).bind(ba,
							function(c) {
								"touchstart" == c.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
								ba = c.type + ".iosSliderEvent";
								l.changeSlide(b, G, H, Q, N, E, B, P, u, L, J, r, S, h, Z, O, w, m)
							})
					});
					"" != m.navPrevSelector && (a(m.navPrevSelector).css({
						cursor: "pointer"
					}), a(m.navPrevSelector).unbind(ba).bind(ba, function(b) {
						"touchstart" == b.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
						ba = b.type + ".iosSliderEvent";
						b = (K[h] + M[h] + O) % O;
						(0 < b || m.infiniteSlider) && l.changeSlide(b -
							1, G, H, Q, N, E, B, P, u, L, J, r, S, h, Z, O, w, m)
					}));
					"" != m.navNextSelector && (a(m.navNextSelector).css({
						cursor: "pointer"
					}), a(m.navNextSelector).unbind(ba).bind(ba, function(b) {
						"touchstart" == b.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
						ba = b.type + ".iosSliderEvent";
						b = (K[h] + M[h] + O) % O;
						(b < r.length - 1 || m.infiniteSlider) && l.changeSlide(b + 1, G, H, Q, N, E, B, P, u, L, J, r, S, h, Z, O, w, m)
					}));
					m.autoSlide && !ea && "" != m.autoSlideToggleSelector && (a(m.autoSlideToggleSelector).css({
							cursor: "pointer"
						}),
						a(m.autoSlideToggleSelector).unbind(ba).bind(ba, function(b) {
							"touchstart" == b.type ? a(this).unbind("click.iosSliderEvent") : a(this).unbind("touchstart.iosSliderEvent");
							ba = b.type + ".iosSliderEvent";
							na ? (l.autoSlide(G, H, Q, N, E, B, P, u, L, J, r, S, h, Z, O, w, m), na = !1, a(m.autoSlideToggleSelector).removeClass("on")) : (l.autoSlidePause(h), na = !0, a(m.autoSlideToggleSelector).addClass("on"))
						}));
					l.autoSlide(G, H, Q, N, E, B, P, u, L, J, r, S, h, Z, O, w, m);
					a(v).bind("mouseleave.iosSliderEvent", function() {
						if (na) return !0;
						l.autoSlide(G, H, Q,
							N, E, B, P, u, L, J, r, S, h, Z, O, w, m)
					});
					a(v).bind("touchend.iosSliderEvent", function() {
						if (na) return !0;
						l.autoSlide(G, H, Q, N, E, B, P, u, L, J, r, S, h, Z, O, w, m)
					});
					m.autoSlideHoverPause && a(v).bind("mouseenter.iosSliderEvent", function() {
						l.autoSlidePause(h)
					});
					a(v).data("iosslider", {
						obj: Ea,
						settings: m,
						scrollerNode: G,
						slideNodes: H,
						numberOfSlides: O,
						centeredSlideOffset: w,
						sliderNumber: h,
						originalOffsets: J,
						childrenOffsets: r,
						sliderMax: y[h],
						scrollbarClass: N,
						scrollbarWidth: E,
						scrollbarStageWidth: P,
						stageWidth: B,
						scrollMargin: u,
						scrollBorder: L,
						infiniteSliderOffset: M[h],
						infiniteSliderWidth: Z,
						slideNodeOuterWidths: S,
						shortContent: ea
					});
					va = !1;
					return !0
				}
				b++;
				var h = b,
					Q = [];
				I[h] = a.extend({}, m);
				n[h] = 0;
				y[h] = 0;
				var t = [0, 0],
					D = [0, 0],
					U = "scrollbarBlock" + b,
					N = "scrollbar" + b,
					Y, Ba, P, E, A, X, w = 0,
					v = a(this),
					B, F, u, L, da, va = !0;
				f = -1;
				var r, J = [],
					wa = 0,
					W = 0,
					Fa = 0,
					G = a(this).children(":first-child"),
					H, ka, S, O = a(G).children().not("script").length,
					fa = !1,
					Da = 0,
					ya = !1,
					sa = void 0,
					Z;
				M[h] = 0;
				var ea = !1,
					na = !1;
				ma[h] = !1;
				var ia, ta = !1,
					oa = !1,
					ba = "touchstart.iosSliderEvent click.iosSliderEvent",
					ca,
					xa, Ca, ra;
				ga[h] = !1;
				T[h] = [];
				m.scrollbarDrag && (m.scrollbar = !0, m.scrollbarHide = !1);
				var Ea = a(this);
				if (void 0 != Ea.data("iosslider")) return !0;
				var pa = [],
					qa = Math.floor(12317 * Math.random());
				a(G).parent().append("<i class = 'i" + qa + "'></i>").append("<i class = 'i" + qa + "'></i>");
				a(".i" + qa).css({
					position: "absolute",
					right: "10px",
					bottom: "10px",
					zIndex: 1E3,
					fontStyle: "normal",
					background: "#fff",
					opacity: .2
				}).eq(1).css({
					bottom: "auto",
					right: "auto",
					top: "10px",
					left: "10px"
				});
				for (f = 0; f < pa.length; f++) a(".i" + qa).html(a(".i" + qa).html() +
					pa[f]);
				14.2 <= parseInt(a().jquery.split(".").join(""), 10) ? a(this).delegate("img", "dragstart.iosSliderEvent", function(a) {
					a.preventDefault()
				}) : a(this).find("img").bind("dragstart.iosSliderEvent", function(a) {
					a.preventDefault()
				});
				m.infiniteSlider && (m.scrollbar = !1);
				m.infiniteSlider && 1 == O && (m.infiniteSlider = !1);
				m.scrollbar && ("" != m.scrollbarContainer ? a(m.scrollbarContainer).append("<div class = '" + U + "'><div class = '" + N + "'></div></div>") : a(G).parent().append("<div class = '" + U + "'><div class = '" + N + "'></div></div>"));
				if (!ha()) return !0;
				a(this).find("a").bind("mousedown", l.preventDrag);
				a(this).find("[onclick]").bind("click", l.preventDrag).each(function() {
					a(this).data("onclick", this.onclick)
				});
				f = l.calcActiveOffset(m, l.getSliderOffset(a(G), "x"), r, B, M[h], O, void 0, h);
				f = (f + M[h] + O) % O;
				f = new l.args("load", m, G, a(G).children(":eq(" + f + ")"), f, f);
				a(v).data("args", f);
				if ("" != m.onSliderLoaded) m.onSliderLoaded(f);
				if (I[h].responsiveSlides || I[h].responsiveSlideContainer) f = k ? "orientationchange" : "resize", a(window).bind(f + ".iosSliderEvent-" +
					h,
					function() {
						if (!ha()) return !0;
						var b = a(v).data("args");
						if ("" != m.onSliderResize) m.onSliderResize(b)
					});
				!m.keyboardControls && !m.tabToAdvance || ea || a(document).bind("keydown.iosSliderEvent", function(a) {
					p || x || (a = a.originalEvent);
					if (ga[h]) return !0;
					if (37 == a.keyCode && m.keyboardControls) a.preventDefault(), a = (K[h] + M[h] + O) % O, (0 < a || m.infiniteSlider) && l.changeSlide(a - 1, G, H, Q, N, E, B, P, u, L, J, r, S, h, Z, O, w, m);
					else if (39 == a.keyCode && m.keyboardControls || 9 == a.keyCode && m.tabToAdvance) a.preventDefault(), a = (K[h] + M[h] + O) % O,
						(a < r.length - 1 || m.infiniteSlider) && l.changeSlide(a + 1, G, H, Q, N, E, B, P, u, L, J, r, S, h, Z, O, w, m)
				});
				if (g || m.desktopClickDrag) {
					var la = !1,
						za = !1;
					f = a(G);
					var ua = a(G),
						Aa = !1;
					m.scrollbarDrag && (f = f.add(Y), ua = ua.add(Ba));
					a(f).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function(b) {
						if (la) return !0;
						la = !0;
						za = !1;
						"touchstart" == b.type ? a(ua).unbind("mousedown.iosSliderEvent") : a(ua).unbind("touchstart.iosSliderEvent");
						if (ga[h] || ea || (Aa = l.isUnselectable(b.target, m))) return fa = la = !1, !0;
						ia = a(this)[0] === a(Y)[0] ? Y : G;
						p || x || (b = b.originalEvent);
						l.autoSlidePause(h);
						ra.unbind(".disableClick");
						if ("touchstart" == b.type) eventX = b.touches[0].pageX, eventY = b.touches[0].pageY;
						else {
							if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
							else if (document.selection)
								if (x) try {
									document.selection.empty()
								} catch (d) {} else document.selection.empty();
							eventX = b.pageX;
							eventY = b.pageY;
							ya = !0;
							sa = G;
							a(this).css({
								cursor: C
							})
						}
						t = [0, 0];
						D = [0, 0];
						c =
							0;
						fa = !1;
						for (b = 0; b < Q.length; b++) clearTimeout(Q[b]);
						b = l.getSliderOffset(G, "x");
						b > -1 * n[h] + w + ca ? (b = -1 * n[h] + w + ca, l.setSliderOffset(a("." + N), b), a("." + N).css({
							width: E - L + "px"
						})) : b < -1 * y[h] && (l.setSliderOffset(a("." + N), P - u - E), a("." + N).css({
							width: E - L + "px"
						}));
						b = a(this)[0] === a(Y)[0] ? n[h] : 0;
						W = -1 * (l.getSliderOffset(this, "x") - eventX - b);
						l.getSliderOffset(this, "y");
						t[1] = eventX;
						D[1] = eventY;
						oa = !1
					});
					a(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function(b) {
						p || x || (b = b.originalEvent);
						if (ga[h] || ea ||
							Aa || !la) return !0;
						var f = 0;
						if ("touchmove" == b.type) eventX = b.touches[0].pageX, eventY = b.touches[0].pageY;
						else {
							if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
							else if (document.selection)
								if (x) try {
									document.selection.empty()
								} catch (g) {} else document.selection.empty();
							eventX = b.pageX;
							eventY = b.pageY;
							if (!ya || !z && ("undefined" != typeof b.webkitMovementX || "undefined" != typeof b.webkitMovementY) && 0 === b.webkitMovementY && 0 === b.webkitMovementX) return !0
						}
						t[0] =
							t[1];
						t[1] = eventX;
						c = (t[1] - t[0]) / 2;
						D[0] = D[1];
						D[1] = eventY;
						d = (D[1] - D[0]) / 2;
						if (!fa) {
							var R = (K[h] + M[h] + O) % O,
								R = new l.args("start", m, G, a(G).children(":eq(" + R + ")"), R, void 0);
							a(v).data("args", R);
							if ("" != m.onSlideStart) m.onSlideStart(R)
						}(d > m.verticalSlideLockThreshold || d < -1 * m.verticalSlideLockThreshold) && "touchmove" == b.type && !fa && (ta = !0);
						(c > m.horizontalSlideLockThreshold || c < -1 * m.horizontalSlideLockThreshold) && "touchmove" == b.type && b.preventDefault();
						if (c > m.slideStartVelocityThreshold || c < -1 * m.slideStartVelocityThreshold) fa = !0;
						if (fa && !ta) {
							var R = l.getSliderOffset(G, "x"),
								k = a(ia)[0] === a(Y)[0] ? n[h] : w,
								ha = a(ia)[0] === a(Y)[0] ? (n[h] - y[h] - w) / (P - u - E) : 1,
								Q = a(ia)[0] === a(Y)[0] ? m.scrollbarElasticPullResistance : m.elasticPullResistance,
								q = m.snapSlideCenter && a(ia)[0] === a(Y)[0] ? 0 : w,
								C = m.snapSlideCenter && a(ia)[0] === a(Y)[0] ? w : 0;
							"touchmove" == b.type && (Fa != b.touches.length && (W = -1 * R + eventX), Fa = b.touches.length);
							if (m.infiniteSlider) {
								if (R <= -1 * y[h]) {
									var A = a(G).width();
									if (R <= -1 * V[h]) {
										var ja = -1 * J[0];
										a(H).each(function(b) {
											l.setSliderOffset(a(H)[b], ja +
												w);
											b < r.length && (r[b] = -1 * ja);
											ja += S[b]
										});
										W -= -1 * r[0];
										n[h] = -1 * r[0] + w;
										y[h] = n[h] + A - B;
										M[h] = 0
									} else {
										var I = 0,
											U = l.getSliderOffset(a(H[0]), "x");
										a(H).each(function(a) {
											l.getSliderOffset(this, "x") < U && (U = l.getSliderOffset(this, "x"), I = a)
										});
										Q = n[h] + A;
										l.setSliderOffset(a(H)[I], Q);
										n[h] = -1 * r[1] + w;
										y[h] = n[h] + A - B;
										r.splice(0, 1);
										r.splice(r.length, 0, -1 * Q + w);
										M[h]++
									}
								}
								if (R >= -1 * n[h] || 0 <= R)
									if (A = a(G).width(), 0 <= R)
										for (ja = -1 * J[0], a(H).each(function(b) {
												l.setSliderOffset(a(H)[b], ja + w);
												b < r.length && (r[b] = -1 * ja);
												ja += S[b]
											}), W += -1 * r[0], n[h] = -1 * r[0] + w, y[h] = n[h] + A - B, M[h] = O; 0 < -1 * r[0] - A + w;) {
											var F = 0,
												T = l.getSliderOffset(a(H[0]), "x");
											a(H).each(function(a) {
												l.getSliderOffset(this, "x") > T && (T = l.getSliderOffset(this, "x"), F = a)
											});
											Q = n[h] - S[F];
											l.setSliderOffset(a(H)[F], Q);
											r.splice(0, 0, -1 * Q + w);
											r.splice(r.length - 1, 1);
											n[h] = -1 * r[0] + w;
											y[h] = n[h] + A - B;
											M[h]--;
											K[h]++
										} else F = 0, T = l.getSliderOffset(a(H[0]), "x"), a(H).each(function(a) {
												l.getSliderOffset(this, "x") > T && (T = l.getSliderOffset(this, "x"), F = a)
											}), Q = n[h] - S[F], l.setSliderOffset(a(H)[F], Q), r.splice(0, 0, -1 * Q + w),
											r.splice(r.length - 1, 1), n[h] = -1 * r[0] + w, y[h] = n[h] + A - B, M[h]--
							} else A = a(G).width(), R > -1 * n[h] + w && (f = (n[h] + -1 * (W - k - eventX + q) * ha - k) * Q * -1 / ha), R < -1 * y[h] && (f = (y[h] + C + -1 * (W - k - eventX) * ha - k) * Q * -1 / ha);
							l.setSliderOffset(G, -1 * (W - k - eventX - f) * ha - k + C);
							m.scrollbar && (l.showScrollbar(m, N), e = Math.floor((W - eventX - f - n[h] + q) / (y[h] - n[h] + w) * (P - u - E) * ha), R = E, 0 >= e ? (R = E - L - -1 * e, l.setSliderOffset(a("." + N), 0), a("." + N).css({
								width: R + "px"
							})) : e >= P - u - L - E ? (R = P - u - L - e, l.setSliderOffset(a("." + N), e), a("." + N).css({
								width: R + "px"
							})) : l.setSliderOffset(a("." +
								N), e));
							"touchmove" == b.type && (da = b.touches[0].pageX);
							b = !1;
							f = l.calcActiveOffset(m, -1 * (W - eventX - f), r, B, M[h], O, void 0, h);
							R = (f + M[h] + O) % O;
							m.infiniteSlider ? R != aa[h] && (b = !0) : f != K[h] && (b = !0);
							if (b && (K[h] = f, aa[h] = R, oa = !0, R = new l.args("change", m, G, a(G).children(":eq(" + R + ")"), R, R), a(v).data("args", R), "" != m.onSlideChange)) m.onSlideChange(R)
						}
					});
					pa = a(window);
					if (x || p) pa = a(document);
					a(f).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function(a) {
						a = a.originalEvent;
						if (za) return !1;
						za = !0;
						if (ga[h] || ea || Aa) return !0;
						if (0 != a.touches.length)
							for (var b = 0; b < a.touches.length; b++) a.touches[b].pageX == da && l.slowScrollHorizontal(G, H, Q, N, c, d, E, B, P, u, L, J, r, S, h, Z, O, ia, oa, w, m);
						else l.slowScrollHorizontal(G, H, Q, N, c, d, E, B, P, u, L, J, r, S, h, Z, O, ia, oa, w, m);
						la = ta = !1;
						return !0
					});
					a(pa).bind("mouseup.iosSliderEvent-" + h, function(b) {
						fa ? xa.unbind("click.disableClick").bind("click.disableClick", l.preventClick) : xa.unbind("click.disableClick").bind("click.disableClick", l.enableClick);
						Ca.each(function() {
							this.onclick = function(b) {
								if (fa) return !1;
								a(this).data("onclick") && a(this).data("onclick").call(this, b || window.event)
							};
							this.onclick = a(this).data("onclick")
						});
						1.8 <= parseFloat(a().jquery) ? ra.each(function() {
							var b = a._data(this, "events");
							if (void 0 != b && void 0 != b.click && "iosSliderEvent" != b.click[0].namespace) {
								if (!fa) return !1;
								a(this).one("click.disableClick", l.preventClick);
								var b = a._data(this, "events").click,
									c = b.pop();
								b.splice(0, 0, c)
							}
						}) : 1.6 <= parseFloat(a().jquery) && ra.each(function() {
							var b = a(this).data("events");
							if (void 0 != b && void 0 != b.click && "iosSliderEvent" !=
								b.click[0].namespace) {
								if (!fa) return !1;
								a(this).one("click.disableClick", l.preventClick);
								var b = a(this).data("events").click,
									c = b.pop();
								b.splice(0, 0, c)
							}
						});
						if (!ma[h]) {
							if (ea) return !0;
							m.desktopClickDrag && a(G).css({
								cursor: q
							});
							m.scrollbarDrag && a(Y).css({
								cursor: q
							});
							ya = !1;
							if (void 0 == sa) return !0;
							l.slowScrollHorizontal(sa, H, Q, N, c, d, E, B, P, u, L, J, r, S, h, Z, O, ia, oa, w, m);
							sa = void 0
						}
						la = ta = !1
					})
				}
			})
		},
		destroy: function(b, c) {
			void 0 == c && (c = this);
			return a(c).each(function() {
				var c = a(this),
					d = c.data("iosslider");
				if (void 0 == d) return !1;
				void 0 == b && (b = !0);
				l.autoSlidePause(d.sliderNumber);
				ma[d.sliderNumber] = !0;
				a(window).unbind(".iosSliderEvent-" + d.sliderNumber);
				a(document).unbind(".iosSliderEvent-" + d.sliderNumber);
				a(document).unbind("keydown.iosSliderEvent");
				a(this).unbind(".iosSliderEvent");
				a(this).children(":first-child").unbind(".iosSliderEvent");
				a(this).children(":first-child").children().unbind(".iosSliderEvent");
				b && (a(this).attr("style", ""), a(this).children(":first-child").attr("style", ""), a(this).children(":first-child").children().attr("style",
					""), a(d.settings.navSlideSelector).attr("style", ""), a(d.settings.navPrevSelector).attr("style", ""), a(d.settings.navNextSelector).attr("style", ""), a(d.settings.autoSlideToggleSelector).attr("style", ""), a(d.settings.unselectableSelector).attr("style", ""));
				d.settings.scrollbar && a(".scrollbarBlock" + d.sliderNumber).remove();
				for (var d = T[d.sliderNumber], e = 0; e < d.length; e++) clearTimeout(d[e]);
				c.removeData("iosslider");
				c.removeData("args")
			})
		},
		update: function(b) {
			void 0 == b && (b = this);
			return a(b).each(function() {
				var b =
					a(this),
					c = b.data("iosslider");
				if (void 0 == c) return !1;
				c.settings.startAtSlide = b.data("args").currentSlideNumber;
				X.destroy(!1, this);
				1 != c.numberOfSlides && c.settings.infiniteSlider && (c.settings.startAtSlide = (K[c.sliderNumber] + 1 + M[c.sliderNumber] + c.numberOfSlides) % c.numberOfSlides);
				X.init(c.settings, this);
				b = new l.args("update", c.settings, c.scrollerNode, a(c.scrollerNode).children(":eq(" + (c.settings.startAtSlide - 1) + ")"), c.settings.startAtSlide - 1, c.settings.startAtSlide - 1);
				a(c.stageNode).data("args", b);
				if ("" !=
					c.settings.onSliderUpdate) c.settings.onSliderUpdate(b)
			})
		},
		addSlide: function(b, c) {
			return this.each(function() {
				var d = a(this),
					e = d.data("iosslider");
				if (void 0 == e) return !1;
				0 == a(e.scrollerNode).children().length ? (a(e.scrollerNode).append(b), d.data("args").currentSlideNumber = 1) : e.settings.infiniteSlider ? (1 == c ? a(e.scrollerNode).children(":eq(0)").before(b) : a(e.scrollerNode).children(":eq(" + (c - 2) + ")").after(b), -1 > M[e.sliderNumber] && K[e.sliderNumber]--, d.data("args").currentSlideNumber >= c && K[e.sliderNumber]++) :
					(c <= e.numberOfSlides ? a(e.scrollerNode).children(":eq(" + (c - 1) + ")").before(b) : a(e.scrollerNode).children(":eq(" + (c - 2) + ")").after(b), d.data("args").currentSlideNumber >= c && d.data("args").currentSlideNumber++);
				d.data("iosslider").numberOfSlides++;
				X.update(this)
			})
		},
		removeSlide: function(b) {
			return this.each(function() {
				var c = a(this),
					d = c.data("iosslider");
				if (void 0 == d) return !1;
				a(d.scrollerNode).children(":eq(" + (b - 1) + ")").remove();
				K[d.sliderNumber] > b - 1 && K[d.sliderNumber]--;
				c.data("iosslider").numberOfSlides--;
				X.update(this)
			})
		},
		goToSlide: function(b, c) {
			void 0 == c && (c = this);
			return a(c).each(function() {
				var c = a(this).data("iosslider");
				if (void 0 == c || c.shortContent) return !1;
				b = b > c.childrenOffsets.length ? c.childrenOffsets.length - 1 : b - 1;
				l.changeSlide(b, a(c.scrollerNode), a(c.slideNodes), T[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset,
					c.settings)
			})
		},
		prevSlide: function() {
			return this.each(function() {
				var b = a(this).data("iosslider");
				if (void 0 == b || b.shortContent) return !1;
				var c = (K[b.sliderNumber] + M[b.sliderNumber] + b.numberOfSlides) % b.numberOfSlides;
				(0 < c || b.settings.infiniteSlider) && l.changeSlide(c - 1, a(b.scrollerNode), a(b.slideNodes), T[b.sliderNumber], b.scrollbarClass, b.scrollbarWidth, b.stageWidth, b.scrollbarStageWidth, b.scrollMargin, b.scrollBorder, b.originalOffsets, b.childrenOffsets, b.slideNodeOuterWidths, b.sliderNumber, b.infiniteSliderWidth,
					b.numberOfSlides, b.centeredSlideOffset, b.settings);
				K[b.sliderNumber] = c
			})
		},
		nextSlide: function() {
			return this.each(function() {
				var b = a(this).data("iosslider");
				if (void 0 == b || b.shortContent) return !1;
				var c = (K[b.sliderNumber] + M[b.sliderNumber] + b.numberOfSlides) % b.numberOfSlides;
				(c < b.childrenOffsets.length - 1 || b.settings.infiniteSlider) && l.changeSlide(c + 1, a(b.scrollerNode), a(b.slideNodes), T[b.sliderNumber], b.scrollbarClass, b.scrollbarWidth, b.stageWidth, b.scrollbarStageWidth, b.scrollMargin, b.scrollBorder, b.originalOffsets,
					b.childrenOffsets, b.slideNodeOuterWidths, b.sliderNumber, b.infiniteSliderWidth, b.numberOfSlides, b.centeredSlideOffset, b.settings);
				K[b.sliderNumber] = c
			})
		},
		lock: function() {
			return this.each(function() {
				var b = a(this).data("iosslider");
				if (void 0 == b || b.shortContent) return !1;
				a(b.scrollerNode).css({
					cursor: "default"
				});
				ga[b.sliderNumber] = !0
			})
		},
		unlock: function() {
			return this.each(function() {
				var b = a(this).data("iosslider");
				if (void 0 == b || b.shortContent) return !1;
				a(b.scrollerNode).css({
					cursor: q
				});
				ga[b.sliderNumber] = !1
			})
		},
		getData: function() {
			return this.each(function() {
				var b = a(this).data("iosslider");
				return void 0 == b || b.shortContent ? !1 : b
			})
		},
		autoSlidePause: function() {
			return this.each(function() {
				var b = a(this).data("iosslider");
				if (void 0 == b || b.shortContent) return !1;
				I[b.sliderNumber].autoSlide = !1;
				l.autoSlidePause(b.sliderNumber);
				return b
			})
		},
		autoSlidePlay: function() {
			return this.each(function() {
				var b = a(this).data("iosslider");
				if (void 0 == b || b.shortContent) return !1;
				I[b.sliderNumber].autoSlide = !0;
				l.autoSlide(a(b.scrollerNode),
					a(b.slideNodes), T[b.sliderNumber], b.scrollbarClass, b.scrollbarWidth, b.stageWidth, b.scrollbarStageWidth, b.scrollMargin, b.scrollBorder, b.originalOffsets, b.childrenOffsets, b.slideNodeOuterWidths, b.sliderNumber, b.infiniteSliderWidth, b.numberOfSlides, b.centeredSlideOffset, b.settings);
				return b
			})
		}
	};
	a.fn.iosSlider = function(b) {
		if (X[b]) return X[b].apply(this, Array.prototype.slice.call(arguments, 1));
		if ("object" !== typeof b && b) a.error("invalid method call!");
		else return X.init.apply(this, arguments)
	}
})(jQuery);
(function(a) {
	var b, c, d, e, g, k, f, p = function() {},
		x = !!window.jQuery,
		z = a(window),
		t = function(a, c) {
			b.ev.on("mfp" + a + ".mfp", c)
		},
		q = function(b, c, d, e) {
			var f = document.createElement("div");
			return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
		},
		C = function(c, d) {
			b.ev.triggerHandler("mfp" + c, d);
			b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
		},
		D = function(c) {
			return c === f && b.currTemplate.closeBtn || (b.currTemplate.closeBtn =
				a(b.st.closeMarkup.replace("%title%", b.st.tClose)), f = c), b.currTemplate.closeBtn
		},
		I = function() {
			a.magnificPopup.instance || (b = new p, b.init(), a.magnificPopup.instance = b)
		},
		ma = function() {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== a.transition) return !0;
			for (; b.length;)
				if (b.pop() + "Transition" in a) return !0;
			return !1
		};
	p.prototype = {
		constructor: p,
		init: function() {
			var c = navigator.appVersion;
			b.isIE7 = -1 !== c.indexOf("MSIE 7.");
			b.isIE8 = -1 !== c.indexOf("MSIE 8.");
			b.isLowIE = b.isIE7 ||
				b.isIE8;
			b.isAndroid = /android/gi.test(c);
			b.isIOS = /iphone|ipad|ipod/gi.test(c);
			b.supportsTransition = ma();
			b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
			e = a(document);
			b.popupsCache = {}
		},
		open: function(c) {
			d || (d = a(document.body));
			var f;
			if (!1 === c.isObj) {
				b.items = c.items.toArray();
				b.index = 0;
				var g, h = c.items;
				for (f = 0; h.length > f; f++)
					if (g = h[f], g.parsed && (g = g.el[0]), g === c.el[0]) {
						b.index = f;
						break
					}
			} else b.items = a.isArray(c.items) ?
				c.items : [c.items], b.index = c.index || 0;
			if (b.isOpen) return b.updateItemHTML(), void 0;
			b.types = [];
			k = "";
			b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : e;
			c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {};
			b.st = a.extend(!0, {}, a.magnificPopup.defaults, c);
			b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos;
			b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1);
			b.bgOverlay || (b.bgOverlay = q("bg").on("click.mfp", function() {
				b.close()
			}), b.wrap = q("wrap").attr("tabindex", -1).on("click.mfp", function(a) {
				b._checkIfClose(a.target) && b.close()
			}), b.container = q("container", b.wrap));
			b.contentContainer = q("content");
			b.st.preloader && (b.preloader = q("preloader", b.container, b.st.tLoading));
			g = a.magnificPopup.modules;
			for (f = 0; g.length > f; f++) h = g[f], h = h.charAt(0).toUpperCase() + h.slice(1), b["init" + h].call(b);
			C("BeforeOpen");
			b.st.showCloseBtn && (b.st.closeBtnInside ? (t("MarkupParse",
				function(a, b, c, d) {
					c.close_replaceWith = D(d.type)
				}), k += " mfp-close-btn-in") : b.wrap.append(D()));
			b.st.alignTop && (k += " mfp-align-top");
			b.fixedContentPos ? b.wrap.css({
				overflow: b.st.overflowY,
				overflowX: "hidden",
				overflowY: b.st.overflowY
			}) : b.wrap.css({
				top: z.scrollTop(),
				position: "absolute"
			});
			(!1 === b.st.fixedBgPos || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
				height: e.height(),
				position: "absolute"
			});
			b.st.enableEscapeKey && e.on("keyup.mfp", function(a) {
				27 === a.keyCode && b.close()
			});
			z.on("resize.mfp",
				function() {
					b.updateSize()
				});
			b.st.closeOnContentClick || (k += " mfp-auto-cursor");
			k && b.wrap.addClass(k);
			f = b.wH = z.height();
			g = {};
			b.fixedContentPos && b._hasScrollBar(f) && (h = b._getScrollbarSize()) && (g.marginRight = h);
			b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : g.overflow = "hidden");
			h = b.st.mainClass;
			return b.isIE7 && (h += " mfp-ie7"), h && b._addClassToMFP(h), b.updateItemHTML(), C("BuildControls"), a("html").css(g), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || d), b._lastFocusedEl = document.activeElement,
				setTimeout(function() {
					b.content ? (b._addClassToMFP("mfp-ready"), b._setFocus()) : b.bgOverlay.addClass("mfp-ready");
					e.on("focusin.mfp", b._onFocusIn)
				}, 16), b.isOpen = !0, b.updateSize(f), C("Open"), c
		},
		close: function() {
			b.isOpen && (C("BeforeClose"), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP("mfp-removing"), setTimeout(function() {
				b._close()
			}, b.st.removalDelay)) : b._close())
		},
		_close: function() {
			C("Close");
			var c = "mfp-removing mfp-ready ";
			if (b.bgOverlay.detach(), b.wrap.detach(),
				b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) c = {
				marginRight: ""
			}, b.isIE7 ? a("body, html").css("overflow", "") : c.overflow = "", a("html").css(c);
			e.off("keyup.mfp focusin.mfp");
			b.ev.off(".mfp");
			b.wrap.attr("class", "mfp-wrap").removeAttr("style");
			b.bgOverlay.attr("class", "mfp-bg");
			b.container.attr("class", "mfp-container");
			!b.st.showCloseBtn || b.st.closeBtnInside && !0 !== b.currTemplate[b.currItem.type] || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach();
			b._lastFocusedEl && a(b._lastFocusedEl).focus();
			b.currItem = null;
			b.content = null;
			b.currTemplate = null;
			b.prevHeight = 0;
			C("AfterClose")
		},
		updateSize: function(a) {
			b.isIOS ? (a = document.documentElement.clientWidth / window.innerWidth * window.innerHeight, b.wrap.css("height", a), b.wH = a) : b.wH = a || z.height();
			b.fixedContentPos || b.wrap.css("height", b.wH);
			C("Resize")
		},
		updateItemHTML: function() {
			var c = b.items[b.index];
			b.contentContainer.detach();
			b.content && b.content.detach();
			c.parsed || (c = b.parseEl(b.index));
			var d = c.type;
			if (C("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
				var e = b.st[d] ? b.st[d].markup : !1;
				C("FirstMarkupParse", e);
				b.currTemplate[d] = e ? a(e) : !0
			}
			g && g !== c.type && b.container.removeClass("mfp-" + g + "-holder");
			e = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
			b.appendContent(e, d);
			c.preloaded = !0;
			C("Change", c);
			g = c.type;
			b.container.prepend(b.contentContainer);
			C("AfterChange")
		},
		appendContent: function(a, c) {
			(b.content = a) ? b.st.showCloseBtn && b.st.closeBtnInside && !0 === b.currTemplate[c] ?
				b.content.find(".mfp-close").length || b.content.append(D()) : b.content = a: b.content = "";
			C("BeforeAppend");
			b.container.addClass("mfp-" + c + "-holder");
			b.contentContainer.append(b.content)
		},
		parseEl: function(c) {
			var d, e = b.items[c];
			if (e.tagName ? e = {
					el: a(e)
				} : (d = e.type, e = {
					data: e,
					src: e.src
				}), e.el) {
				for (var f = b.types, g = 0; f.length > g; g++)
					if (e.el.hasClass("mfp-" + f[g])) {
						d = f[g];
						break
					}
				e.src = e.el.attr("data-mfp-src");
				e.src || (e.src = e.el.attr("href"))
			}
			return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e,
				C("ElementParse", e), b.items[c]
		},
		addGroup: function(a, c) {
			var d = function(d) {
				d.mfpEl = this;
				b._openClick(d, a, c)
			};
			c || (c = {});
			c.mainEl = a;
			c.items ? (c.isObj = !0, a.off("click.magnificPopup").on("click.magnificPopup", d)) : (c.isObj = !1, c.delegate ? a.off("click.magnificPopup").on("click.magnificPopup", c.delegate, d) : (c.items = a, a.off("click.magnificPopup").on("click.magnificPopup", d)))
		},
		_openClick: function(c, d, e) {
			if ((void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick) || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
				var f =
					void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
				if (f)
					if (a.isFunction(f)) {
						if (!f.call(b)) return !0
					} else if (f > z.width()) return !0;
				c.type && (c.preventDefault(), b.isOpen && c.stopPropagation());
				e.el = a(c.mfpEl);
				e.delegate && (e.items = d.find(e.delegate));
				b.open(e)
			}
		},
		updateStatus: function(a, d) {
			if (b.preloader) {
				c !== a && b.container.removeClass("mfp-s-" + c);
				d || "loading" !== a || (d = b.st.tLoading);
				var e = {
					status: a,
					text: d
				};
				C("UpdateStatus", e);
				a = e.status;
				d = e.text;
				b.preloader.html(d);
				b.preloader.find("a").on("click",
					function(a) {
						a.stopImmediatePropagation()
					});
				b.container.addClass("mfp-s-" + a);
				c = a
			}
		},
		_checkIfClose: function(c) {
			if (!a(c).hasClass("mfp-prevent-close")) {
				var d = b.st.closeOnContentClick,
					e = b.st.closeOnBgClick;
				if (d && e || !b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
				if (c === b.content[0] || a.contains(b.content[0], c)) {
					if (d) return !0
				} else if (e && a.contains(document, c)) return !0;
				return !1
			}
		},
		_addClassToMFP: function(a) {
			b.bgOverlay.addClass(a);
			b.wrap.addClass(a)
		},
		_removeClassFromMFP: function(a) {
			this.bgOverlay.removeClass(a);
			b.wrap.removeClass(a)
		},
		_hasScrollBar: function(a) {
			return (b.isIE7 ? e.height() : document.body.scrollHeight) > (a || z.height())
		},
		_setFocus: function() {
			(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
		},
		_onFocusIn: function(c) {
			return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
		},
		_parseMarkup: function(b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c));
			C("MarkupParse", [b, c, d]);
			a.each(c, function(a, c) {
				if (void 0 === c || !1 === c) return !0;
				if (e = a.split("_"), 1 < e.length) {
					var d = b.find(".mfp-" +
						e[0]);
					if (0 < d.length) {
						var f = e[1];
						"replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
					}
				} else b.find(".mfp-" + a).html(c)
			})
		},
		_getScrollbarSize: function() {
			if (void 0 === b.scrollbarSize) {
				var a = document.createElement("div");
				a.id = "mfp-sbm";
				a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
				document.body.appendChild(a);
				b.scrollbarSize = a.offsetWidth - a.clientWidth;
				document.body.removeChild(a)
			}
			return b.scrollbarSize
		}
	};
	a.magnificPopup = {
		instance: null,
		proto: p.prototype,
		modules: [],
		open: function(b, c) {
			return I(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
		},
		close: function() {
			return a.magnificPopup.instance && a.magnificPopup.instance.close()
		},
		registerModule: function(b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options);
			a.extend(this.proto, c.proto);
			this.modules.push(b)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading..."
		}
	};
	a.fn.magnificPopup = function(c) {
		I();
		var d = a(this);
		if ("string" == typeof c)
			if ("open" === c) {
				var e, f = x ? d.data("magnificPopup") : d[0].magnificPopup,
					g = parseInt(arguments[1], 10) ||
					0;
				f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g));
				b._openClick({
					mfpEl: e
				}, d, f)
			} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
		else c = a.extend(!0, {}, c), x ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
		return d
	};
	var T, K, aa, M = function() {
		aa && (K.after(aa.addClass(T)).detach(), aa = null)
	};
	a.magnificPopup.registerModule("inline", {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				b.types.push("inline");
				t("Close.inline", function() {
					M()
				})
			},
			getInline: function(c, d) {
				if (M(), c.src) {
					var e = b.st.inline,
						f = a(c.src);
					if (f.length) {
						var g = f[0].parentNode;
						g && g.tagName && (K || (T = e.hiddenClass, K = q(T), T = "mfp-" + T), aa = f.after(K).detach().removeClass(T));
						b.updateStatus("ready")
					} else b.updateStatus("error", e.tNotFound), f = a("<div>");
					return c.inlineElement = f, f
				}
				return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
			}
		}
	});
	var n, y = function() {
		n && d.removeClass(n);
		b.req && b.req.abort()
	};
	a.magnificPopup.registerModule("ajax", {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				b.types.push("ajax");
				n = b.st.ajax.cursor;
				t("Close.ajax", y);
				t("BeforeChange.ajax", y)
			},
			getAjax: function(c) {
				n && d.addClass(n);
				b.updateStatus("loading");
				var e = a.extend({
					url: c.src,
					success: function(e, f, g) {
						e = {
							data: e,
							xhr: g
						};
						C("ParseAjax", e);
						b.appendContent(a(e.data), "ajax");
						c.finished = !0;
						n && d.removeClass(n);
						b._setFocus();
						setTimeout(function() {
							b.wrap.addClass("mfp-ready")
						}, 16);
						b.updateStatus("ready");
						C("AjaxContentAdded")
					},
					error: function() {
						n && d.removeClass(n);
						c.finished = c.loadError = !0;
						b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
					}
				}, b.st.ajax.settings);
				return b.req = a.ajax(e), ""
			}
		}
	});
	var V, ga = function(c) {
		if (c.data && void 0 !== c.data.title) return c.data.title;
		var d = b.st.image.titleSrc;
		if (d) {
			if (a.isFunction(d)) return d.call(b, c);
			if (c.el) return c.el.attr(d) || ""
		}
		return ""
	};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function() {
				var a = b.st.image;
				b.types.push("image");
				t("Open.image", function() {
					"image" === b.currItem.type && a.cursor && d.addClass(a.cursor)
				});
				t("Close.image", function() {
					a.cursor && d.removeClass(a.cursor);
					z.off("resize.mfp")
				});
				t("Resize.image", b.resizeImage);
				b.isLowIE && t("AfterChange", b.resizeImage)
			},
			resizeImage: function() {
				var a = b.currItem;
				if (a && a.img && b.st.image.verticalFit) {
					var c =
						0;
					b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10));
					a.img.css("max-height", b.wH - c)
				}
			},
			_onImageHasSize: function(a) {
				a.img && (a.hasSize = !0, V && clearInterval(V), a.isCheckingImgSize = !1, C("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
			},
			findImageSize: function(a) {
				var c = 0,
					d = a.img[0],
					e = function(f) {
						V && clearInterval(V);
						V = setInterval(function() {
							return 0 < d.naturalWidth ? (b._onImageHasSize(a), void 0) : (200 < c && clearInterval(V),
								c++, 3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500), void 0)
						}, f)
					};
				e(1)
			},
			getImage: function(c, d) {
				var e = 0,
					f = function() {
						c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, C("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
					},
					g = function() {
						c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", k.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
					},
					k = b.st.image,
					p = d.find(".mfp-img");
				if (p.length) {
					var l = document.createElement("img");
					l.className = "mfp-img";
					c.img = a(l).on("load.mfploader", f).on("error.mfploader", g);
					l.src = c.src;
					p.is("img") && (c.img = c.img.clone());
					l = c.img[0];
					0 < l.naturalWidth ? c.hasSize = !0 : l.width || (c.hasSize = !1)
				}
				return b._parseMarkup(d, {
					title: ga(c),
					img_replaceWith: c.img
				}, c), b.resizeImage(), c.hasSize ? (V && clearInterval(V), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", k.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
					d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
			}
		}
	});
	var l;
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function(a) {
				return a.is("img") ? a : a.find("img")
			}
		},
		proto: {
			initZoom: function() {
				var a, c = b.st.zoom;
				if (c.enabled && b.supportsTransition) {
					var d, e, f = c.duration,
						g = function(a) {
							a = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
							var b = {
								position: "fixed",
								zIndex: 9999,
								left: 0,
								top: 0,
								"-webkit-backface-visibility": "hidden"
							};
							return b["-webkit-transition"] = b["-moz-transition"] = b["-o-transition"] = b.transition = "all " + c.duration / 1E3 + "s " + c.easing, a.css(b), a
						},
						k = function() {
							b.content.css("visibility", "visible")
						};
					t("BuildControls.zoom", function() {
						if (b._allowZoom()) {
							if (clearTimeout(d), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return k(), void 0;
							e = g(a);
							e.css(b._getOffset());
							b.wrap.append(e);
							d = setTimeout(function() {
								e.css(b._getOffset(!0));
								d = setTimeout(function() {
									k();
									setTimeout(function() {
										e.remove();
										a = e = null;
										C("ZoomAnimationEnded")
									}, 16)
								}, f)
							}, 16)
						}
					});
					t("BeforeClose.zoom", function() {
						if (b._allowZoom()) {
							if (clearTimeout(d), b.st.removalDelay = f, !a) {
								if (a = b._getItemToZoom(), !a) return;
								e = g(a)
							}
							e.css(b._getOffset(!0));
							b.wrap.append(e);
							b.content.css("visibility", "hidden");
							setTimeout(function() {
								e.css(b._getOffset())
							}, 16)
						}
					});
					t("Close.zoom", function() {
						b._allowZoom() && (k(), e && e.remove(), a = null)
					})
				}
			},
			_allowZoom: function() {
				return "image" === b.currItem.type
			},
			_getItemToZoom: function() {
				return b.currItem.hasSize ?
					b.currItem.img : !1
			},
			_getOffset: function(c) {
				var d;
				d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
				c = d.offset();
				var e = parseInt(d.css("padding-top"), 10),
					f = parseInt(d.css("padding-bottom"), 10);
				c.top -= a(window).scrollTop() - e;
				d = {
					width: d.width(),
					height: (x ? d.innerHeight() : d[0].offsetHeight) - f - e
				};
				return (void 0 === l && (l = void 0 !== document.createElement("p").style.MozTransform), l) ? d["-moz-transform"] = d.transform = "translate(" + c.left + "px," + c.top + "px)" : (d.left = c.left, d.top = c.top), d
			}
		}
	});
	var X = function(a) {
		if (b.currTemplate.iframe) {
			var c =
				b.currTemplate.iframe.find("iframe");
			c.length && (a || (c[0].src = "//about:blank"), b.isIE8 && c.css("display", a ? "block" : "none"))
		}
	};
	a.magnificPopup.registerModule("iframe", {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function() {
				b.types.push("iframe");
				t("BeforeChange", function(a, b, c) {
					b !== c && ("iframe" === b ? X() : "iframe" === c && X(!0))
				});
				t("Close.iframe", function() {
					X()
				})
			},
			getIframe: function(c, d) {
				var e = c.src,
					f = b.st.iframe;
				a.each(f.patterns, function() {
					return -1 < e.indexOf(this.index) ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
				});
				var g = {};
				return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
			}
		}
	});
	var Q = function(a) {
			var c = b.items.length;
			return a > c - 1 ? a - c : 0 > a ? c + a : a
		},
		Y = function(a, b, c) {
			return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
		};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function() {
				var c = b.st.gallery,
					d = !!a.fn.mfpFastClick;
				return b.direction = !0, c && c.enabled ? (k += " mfp-gallery", t("Open.mfp-gallery", function() {
						c.navigateByImgClick && b.wrap.on("click.mfp-gallery", ".mfp-img", function() {
							return 1 < b.items.length ? (b.next(), !1) : void 0
						});
						e.on("keydown.mfp-gallery", function(a) {
							37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
						})
					}), t("UpdateStatus.mfp-gallery", function(a, c) {
						c.text && (c.text = Y(c.text, b.currItem.index, b.items.length))
					}),
					t("MarkupParse.mfp-gallery", function(a, d, e, f) {
						a = b.items.length;
						e.counter = 1 < a ? Y(c.tCounter, f.index, a) : ""
					}), t("BuildControls.mfp-gallery", function() {
						if (1 < b.items.length && c.arrows && !b.arrowLeft) {
							var e = c.arrowMarkup,
								f = b.arrowLeft = a(e.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
								e = b.arrowRight = a(e.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close"),
								g = d ? "mfpFastClick" : "click";
							f[g](function() {
								b.prev()
							});
							e[g](function() {
								b.next()
							});
							b.isIE7 && (q("b", f[0], !1, !0), q("a", f[0], !1, !0), q("b", e[0], !1, !0), q("a", e[0], !1, !0));
							b.container.append(f.add(e))
						}
					}), t("Change.mfp-gallery", function() {
						b._preloadTimeout && clearTimeout(b._preloadTimeout);
						b._preloadTimeout = setTimeout(function() {
							b.preloadNearbyImages();
							b._preloadTimeout = null
						}, 16)
					}), t("Close.mfp-gallery", function() {
						e.off(".mfp-gallery");
						b.wrap.off("click.mfp-gallery");
						b.arrowLeft && d && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick();
						b.arrowRight = b.arrowLeft = null
					}), void 0) : !1
			},
			next: function() {
				b.direction = !0;
				b.index = Q(b.index + 1);
				b.updateItemHTML()
			},
			prev: function() {
				b.direction = !1;
				b.index = Q(b.index - 1);
				b.updateItemHTML()
			},
			goTo: function(a) {
				b.direction = a >= b.index;
				b.index = a;
				b.updateItemHTML()
			},
			preloadNearbyImages: function() {
				var a;
				a = b.st.gallery.preload;
				var c = Math.min(a[0], b.items.length),
					d = Math.min(a[1], b.items.length);
				for (a = 1;
					(b.direction ? d : c) >= a; a++) b._preloadItem(b.index + a);
				for (a = 1;
					(b.direction ? c : d) >= a; a++) b._preloadItem(b.index - a)
			},
			_preloadItem: function(c) {
				if (c = Q(c), !b.items[c].preloaded) {
					var d = b.items[c];
					d.parsed || (d = b.parseEl(c));
					C("LazyLoad", d);
					"image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
						d.hasSize = !0
					}).on("error.mfploader", function() {
						d.hasSize = !0;
						d.loadError = !0;
						C("LazyLoadError", d)
					}).attr("src", d.src));
					d.preloaded = !0
				}
			}
		}
	});
	a.magnificPopup.registerModule("retina", {
		options: {
			replaceSrc: function(a) {
				return a.src.replace(/\.\w+$/, function(a) {
					return "@2x" + a
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function() {
				if (1 < window.devicePixelRatio) {
					var a = b.st.retina,
						c = a.ratio,
						c = isNaN(c) ?
						c() : c;
					1 < c && (t("ImageHasSize.retina", function(a, b) {
						b.img.css({
							"max-width": b.img[0].naturalWidth / c,
							width: "100%"
						})
					}), t("ElementParse.retina", function(b, d) {
						d.src = a.replaceSrc(d, c)
					}))
				}
			}
		}
	});
	(function() {
		var b = "ontouchstart" in window,
			c = function() {
				z.off("touchmove" + d + " touchend" + d)
			},
			d = ".mfpFastClick";
		a.fn.mfpFastClick = function(e) {
			return a(this).each(function() {
				var f, g = a(this);
				if (b) {
					var k, p, l, x, q, n;
					g.on("touchstart" + d, function(a) {
						x = !1;
						n = 1;
						q = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0];
						p = q.clientX;
						l = q.clientY;
						z.on("touchmove" + d, function(a) {
							q = a.originalEvent ? a.originalEvent.touches : a.touches;
							n = q.length;
							q = q[0];
							(10 < Math.abs(q.clientX - p) || 10 < Math.abs(q.clientY - l)) && (x = !0, c())
						}).on("touchend" + d, function(a) {
							c();
							x || 1 < n || (f = !0, a.preventDefault(), clearTimeout(k), k = setTimeout(function() {
								f = !1
							}, 1E3), e())
						})
					})
				}
				g.on("click" + d, function() {
					f || e()
				})
			})
		};
		a.fn.destroyMfpFastClick = function() {
			a(this).off("touchstart" + d + " click" + d);
			b && z.off("touchmove" + d + " touchend" + d)
		}
	})();
	I()
})(window.jQuery || window.Zepto);
(function(a, b, c) {
	function d(a) {
		var b = {},
			d = /^jQuery\d+$/;
		c.each(a.attributes, function(a, c) {
			c.specified && !d.test(c.name) && (b[c.name] = c.value)
		});
		return b
	}

	function e(a, b) {
		var d = c(this);
		if (this.value == d.attr("placeholder") && d.hasClass("placeholder"))
			if (d.data("placeholder-password")) {
				d = d.hide().next().show().attr("id", d.removeAttr("id").data("placeholder-id"));
				if (!0 === a) return d[0].value = b;
				d.focus()
			} else this.value = "", d.removeClass("placeholder"), this == k() && this.select()
	}

	function g() {
		var a, b = c(this),
			f =
			this.id;
		if ("" == this.value) {
			if ("password" == this.type) {
				if (!b.data("placeholder-textinput")) {
					try {
						a = b.clone().attr({
							type: "text"
						})
					} catch (g) {
						a = c("<input>").attr(c.extend(d(this), {
							type: "text"
						}))
					}
					a.removeAttr("name").data({
						"placeholder-password": b,
						"placeholder-id": f
					}).bind("focus.placeholder", e);
					b.data({
						"placeholder-textinput": a,
						"placeholder-id": f
					}).before(a)
				}
				b = b.removeAttr("id").hide().prev().attr("id", f).show()
			}
			b.addClass("placeholder");
			b[0].value = b.attr("placeholder")
		} else b.removeClass("placeholder")
	}

	function k() {
		try {
			return b.activeElement
		} catch (a) {}
	}
	var f = "placeholder" in b.createElement("input"),
		p = "placeholder" in b.createElement("textarea"),
		x = c.fn,
		z = c.valHooks,
		t = c.propHooks;
	f && p ? (x = x.placeholder = function() {
		return this
	}, x.input = x.textarea = !0) : (x = x.placeholder = function() {
		this.filter((f ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
			"focus.placeholder": e,
			"blur.placeholder": g
		}).data("placeholder-enabled", !0).trigger("blur.placeholder");
		return this
	}, x.input = f, x.textarea = p, x = {
		get: function(a) {
			var b =
				c(a),
				d = b.data("placeholder-password");
			return d ? d[0].value : b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
		},
		set: function(a, b) {
			var d = c(a),
				f = d.data("placeholder-password");
			if (f) return f[0].value = b;
			if (!d.data("placeholder-enabled")) return a.value = b;
			"" == b ? (a.value = b, a != k() && g.call(a)) : d.hasClass("placeholder") ? e.call(a, !0, b) || (a.value = b) : a.value = b;
			return d
		}
	}, f || (z.input = x, t.value = x), p || (z.textarea = x, t.value = x), c(function() {
		c(b).delegate("form", "submit.placeholder", function() {
			var a =
				c(".placeholder", this).each(e);
			setTimeout(function() {
				a.each(g)
			}, 10)
		})
	}), c(a).bind("beforeunload.placeholder", function() {
		c(".placeholder").each(function() {
			this.value = ""
		})
	}))
})(this, document, jQuery);
(function() {
	for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(b, c) {
		var g = (new Date).getTime(),
			k = Math.max(0, 16 - (g - a)),
			f = window.setTimeout(function() {
				b(g + k)
			}, k);
		a = g + k;
		return f
	});
	window.cancelAnimationFrame || (window.cancelAnimationFrame =
		function(a) {
			clearTimeout(a)
		})
})();
var tdDetect = {};
(function() {
	tdDetect = {
		isIe8: !1,
		isIe9: !1,
		isIe10: !1,
		isIe11: !1,
		isIe: !1,
		isSafari: !1,
		isChrome: !1,
		isIpad: !1,
		isTouchDevice: !1,
		hasHistory: !1,
		isPhoneScreen: !1,
		isIos: !1,
		isAndroid: !1,
		isOsx: !1,
		isFirefox: !1,
		isWinOs: !1,
		isMobileDevice: !1,
		htmlJqueryObj: null,
		runIsPhoneScreen: function() {
			(768 > jQuery(window).width() || 768 > jQuery(window).height()) && !1 === tdDetect.isIpad ? tdDetect.isPhoneScreen = !0 : tdDetect.isPhoneScreen = !1
		},
		set: function(a, b) {
			tdDetect[a] = b
		}
	};
	tdDetect.htmlJqueryObj = jQuery("html"); - 1 !== navigator.appVersion.indexOf("Win") &&
		tdDetect.set("isWinOs", !0);
	"ontouchstart" in window && !tdDetect.isWinOs && tdDetect.set("isTouchDevice", !0);
	tdDetect.htmlJqueryObj.is(".ie8") && (tdDetect.set("isIe8", !0), tdDetect.set("isIe", !0));
	tdDetect.htmlJqueryObj.is(".ie9") && (tdDetect.set("isIe9", !0), tdDetect.set("isIe", !0)); - 1 < navigator.userAgent.indexOf("MSIE 10.0") && (tdDetect.set("isIe10", !0), tdDetect.set("isIe", !0));
	navigator.userAgent.match(/Trident.*rv\:11\./) && tdDetect.set("isIe11", !0);
	window.history && window.history.pushState && tdDetect.set("hasHistory", !0); - 1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && tdDetect.set("isSafari", !0);
	/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) && tdDetect.set("isChrome", !0);
	null !== navigator.userAgent.match(/iPad/i) && tdDetect.set("isIpad", !0);
	/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && tdDetect.set("isIos", !0);
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && tdDetect.set("isMobileDevice", !0);
	tdDetect.runIsPhoneScreen(); -
	1 < navigator.userAgent.toLowerCase().indexOf("android") && tdDetect.set("isAndroid", !0); - 1 !== navigator.userAgent.indexOf("Mac OS X") && tdDetect.set("isOsx", !0); - 1 !== navigator.userAgent.indexOf("Firefox") && tdDetect.set("isFirefox", !0)
})();
var tdViewport = {};
(function() {
	tdViewport = {
		INTERVAL_INITIAL_INDEX: -1,
		_currentIntervalIndex: tdViewport.INTERVAL_INITIAL_INDEX,
		_intervalList: [],
		init: function() {
			if ("undefined" !== typeof window.td_viewport_interval_list && Array === window.td_viewport_interval_list.constructor) {
				for (var a = 0; a < window.td_viewport_interval_list.length; a++) {
					var b = new tdViewport.item,
						c = window.td_viewport_interval_list[a];
					if (!c.hasOwnProperty("limitBottom") || !c.hasOwnProperty("sidebarWidth")) break;
					b.limitBottom = c.limitBottom;
					b.sidebarWidth = c.sidebarWidth;
					tdViewport._items.push(b)
				}
				tdViewport.detectChanges()
			}
		},
		getCurrentIntervalIndex: function() {
			return tdViewport._currentIntervalIndex
		},
		setIntervalList: function(a) {
			tdViewport._intervalList = a
		},
		getIntervalList: function() {
			return tdViewport._intervalList
		},
		getCurrentIntervalItem: function() {
			return tdViewport.INTERVAL_INITIAL_INDEX === tdViewport._currentIntervalIndex || 0 === tdViewport._currentIntervalIndex ? null : tdViewport._items[tdViewport._currentIntervalIndex - 1]
		},
		_items: [],
		item: function() {
			this.sidebarWidth = this.limitBottom =
				void 0
		},
		detectChanges: function() {
			var a = !1,
				b, c = 0;
			b = !0 === tdDetect.isSafari ? this._safariWiewPortWidth.getRealWidth() : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			for (var d = 0; d < tdViewport._items.length; d++) {
				if (b <= tdViewport._items[d].limitBottom) {
					c !== tdViewport._currentIntervalIndex && (tdViewport._currentIntervalIndex = c, a = !0, tdViewport.log("changing viewport " + tdViewport._currentIntervalIndex + " ~ " + b));
					break
				}
				c++
			}!1 === a && c !== tdViewport._currentIntervalIndex && (tdViewport._currentIntervalIndex =
				c, a = !0, tdViewport.log("changing viewport " + tdViewport._currentIntervalIndex + " ~ " + b));
			return a
		},
		_safariWiewPortWidth: {
			divAdded: !1,
			divJqueryObject: "",
			getRealWidth: function() {
				!1 === this.divAdded && (this.divJqueryObject = jQuery("<div>").css({
					height: "1px",
					position: "absolute",
					top: "-1px",
					left: "0",
					right: "0",
					visibility: "hidden",
					"z-index": "-1"
				}), this.divJqueryObject.appendTo("body"), this.divAdded = !0);
				return this.divJqueryObject.width()
			}
		},
		log: function(a) {}
	};
	tdViewport.init()
})();
(function() {
	tdDetect.isTouchDevice ? jQuery(".td-header-sp-top-menu .top-header-menu").superfish({
		delay: 300,
		speed: "fast",
		useClick: !0
	}) : jQuery(".td-header-sp-top-menu .top-header-menu").superfish({
		delay: 600,
		speed: 200,
		useClick: !1
	});
	jQuery("#td-header-menu .sf-menu").supersubs({
		minWidth: 10,
		maxWidth: 40,
		extraWidth: 1
	});
	tdDetect.isTouchDevice ? jQuery("#td-header-menu .sf-menu").superfish({
		delay: 300,
		speed: "fast",
		useClick: !0
	}) : jQuery("#td-header-menu .sf-menu").superfish({
		delay: 600,
		speed: 200,
		useClick: !1
	})
})();
var tdUtil = {};
(function() {
	tdUtil = {
		stopBubble: function(a) {
			a && a.stopPropagation ? a.stopPropagation() : window.event.cancelBubble = !0
		},
		imageMoveClassToFigure: function(a) {
			jQuery("figure ." + a).each(function() {
				jQuery(this).parents("figure:first").addClass(a);
				jQuery(this).removeClass(a)
			})
		},
		getBackendVar: function(a) {
			return "undefined" === typeof window[a] ? "" : window[a]
		},
		isUndefined: function(a) {
			return void 0 === a
		},
		scrollToElement: function(a, b) {
			tdIsScrollingAnimation = !0;
			jQuery("html, body").stop();
			var c;
			c = a.offset().top > jQuery(document).height() -
				jQuery(window).height() ? jQuery(document).height() - jQuery(window).height() : a.offset().top;
			jQuery("html, body").animate({
				scrollTop: c
			}, {
				duration: b,
				easing: "easeInOutQuart",
				complete: function() {
					tdIsScrollingAnimation = !1
				}
			})
		},
		scrollIntoView: function(a) {
			tdIsScrollingAnimation = !0;
			if (!0 !== tdDetect.isMobileDevice) {
				jQuery("html, body").stop();
				a = a.offset().top;
				a -= 150;
				var b = Math.abs(jQuery(window).scrollTop() - a) / 5;
				jQuery("html, body").animate({
					scrollTop: a
				}, {
					duration: 1100 + b,
					easing: "easeInOutQuart",
					complete: function() {
						tdIsScrollingAnimation = !1
					}
				})
			}
		},
		scrollToPosition: function(a, b) {
			tdIsScrollingAnimation = !0;
			jQuery("html, body").stop();
			jQuery("html, body").animate({
				scrollTop: a
			}, {
				duration: b,
				easing: "easeInOutQuart",
				complete: function() {
					tdIsScrollingAnimation = !1
				}
			})
		},
		tdMoveY: function(a, b) {
			var c = "translate3d(0px," + b + "px, 0px)";
			a.style["-webkit-transform"] = c;
			a.style["-moz-transform"] = c;
			a.style["-ms-transform"] = c;
			a.style["-o-transform"] = c;
			a.style.transform = c
		},
		isValidUrl: function(a) {
			return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(a) ?
				!0 : !1
		},
		round: function(a, b, c) {
			var d, e, g;
			b = Math.pow(10, b | 0);
			a *= b;
			g = 0 < a | -(0 > a);
			e = a % 1 === .5 * g;
			d = Math.floor(a);
			if (e) switch (c) {
				case "PHP_ROUND_HALF_DOWN":
					a = d + (0 > g);
					break;
				case "PHP_ROUND_HALF_EVEN":
					a = d + d % 2 * g;
					break;
				case "PHP_ROUND_HALF_ODD":
					a = d + !(d % 2);
					break;
				default:
					a = d + (0 < g)
			}
			return (e ? a : Math.round(a)) / b
		}
	}
})();
var tdAffix = {};
(function() {
	tdAffix = {
		allow_scroll: !0,
		menu_selector: "",
		menu_wrap_selector: "",
		tds_snap_menu: "",
		tds_snap_menu_logo: "",
		is_menu_affix_height_computed: !1,
		is_menu_affix_height_on_mobile_computed: !1,
		menu_affix_height: 0,
		menu_affix_height_on_mobile: 0,
		main_menu_height: 0,
		top_offset: 0,
		menu_offset: 0,
		is_requestAnimationFrame_running: !1,
		is_menu_affix: !1,
		is_top_menu: !1,
		menu_offset_max_hit: !1,
		menu_offset_min_hit: !0,
		scroll_window_scrollTop_last: 0,
		init: function(a) {
			tdAffix.menu_selector = a.menu_selector;
			tdAffix.menu_wrap_selector =
				a.menu_wrap_selector;
			tdAffix.tds_snap_menu = a.tds_snap_menu;
			tdAffix.tds_snap_menu_logo = a.tds_snap_menu_logo;
			tdAffix.menu_affix_height = a.menu_affix_height;
			tdAffix.menu_affix_height_on_mobile = a.menu_affix_height_on_mobile;
			tdAffix.tds_snap_menu && (tdDetect.isFirefox && (tdAffix.compute_wrapper(), tdAffix.compute_top()), jQuery().ready(function() {
				tdAffix.compute_wrapper();
				tdAffix.compute_top()
			}), jQuery(window).load(function() {
				tdAffix.compute_wrapper();
				tdAffix.compute_top();
				setTimeout(function() {
						tdAffix.compute_top()
					},
					1E3)
			}))
		},
		_get_menu_affix_height: function() {
			if (!0 === tdDetect.isPhoneScreen) return !tdAffix.is_menu_affix_height_on_mobile_computed && tdAffix.is_menu_affix && (tdAffix.is_menu_affix_height_on_mobile_computed = !0, tdAffix.menu_affix_height_on_mobile = jQuery(tdAffix.menu_selector).height()), tdAffix.menu_affix_height_on_mobile;
			!tdAffix.is_menu_affix_height_computed && tdAffix.is_menu_affix && (tdAffix.is_menu_affix_height_computed = !0, tdAffix.menu_affix_height = jQuery(tdAffix.menu_selector).height());
			return tdAffix.menu_affix_height
		},
		td_events_scroll: function(a) {
			if (tdAffix.allow_scroll && tdAffix.tds_snap_menu) {
				var b = "";
				if ("snap" !== tdAffix.tds_snap_menu && ("smart_snap_mobile" !== tdAffix.tds_snap_menu || !0 === tdDetect.isPhoneScreen)) {
					var c = 0;
					a !== tdAffix.scroll_window_scrollTop_last && (b = a > tdAffix.scroll_window_scrollTop_last ? "down" : "up", c = Math.abs(a - tdAffix.scroll_window_scrollTop_last));
					tdAffix.scroll_window_scrollTop_last = a
				}
				"" !== tdAffix.tds_snap_menu && "" !== tdAffix.tds_snap_menu_logo && jQuery(".td-main-menu-logo").addClass("td-logo-sticky");
				if (a > tdAffix.top_offset + (tdAffix.main_menu_height / 2 - tdAffix._get_menu_affix_height() / 2) || !0 === tdAffix.is_menu_affix && "smart_snap_always" === tdAffix.tds_snap_menu && a > tdAffix.top_offset - tdAffix._get_menu_affix_height() || !0 === tdAffix.is_top_menu) {
					var d = jQuery(tdAffix.menu_selector);
					tdAffix._affix_on(d);
					"snap" === tdAffix.tds_snap_menu || "smart_snap_mobile" === tdAffix.tds_snap_menu && !1 === tdDetect.isPhoneScreen || (!1 === tdAffix.menu_offset_max_hit && "down" === b || !1 === tdAffix.menu_offset_min_hit && "up" === b) && window.requestAnimationFrame(function() {
						var e =
							0;
						0 < a && ("down" === b ? (e = tdAffix.menu_offset - c, e < -tdAffix._get_menu_affix_height() && (e = -tdAffix._get_menu_affix_height())) : "up" === b && (e = tdAffix.menu_offset + c, 0 < e && (e = 0)));
						tdUtil.tdMoveY(d[0], e);
						tdAffix.menu_offset_min_hit = 0 === e ? !0 : !1;
						e === -tdAffix._get_menu_affix_height() ? (tdAffix.menu_offset_max_hit = !0, (!0 === tdDetect.isIos || tdDetect.isSafari) && d.hide(), "" !== tdAffix.tds_snap_menu_logo && jQuery(".td-main-menu-logo").addClass("td-logo-sticky")) : (tdAffix.menu_offset_max_hit = !1, (!0 === tdDetect.isIos || tdDetect.isSafari) &&
							d.show());
						tdAffix.menu_offset = e
					}, d[0])
				} else tdAffix._affix_off(jQuery(tdAffix.menu_selector))
			}
		},
		compute_top: function() {
			tdAffix.top_offset = jQuery(tdAffix.menu_wrap_selector).offset().top;
			"smart_snap_always" === tdAffix.tds_snap_menu && (tdAffix.top_offset += tdAffix.menu_affix_height);
			tdAffix.is_top_menu = 1 === tdAffix.top_offset ? !0 : !1;
			tdAffix.td_events_scroll(jQuery(window).scrollTop())
		},
		compute_wrapper: function() {
			jQuery(tdAffix.menu_selector).hasClass("td-affix") ? (jQuery(tdAffix.menu_selector).removeClass("td-affix"),
				tdAffix.main_menu_height = jQuery(tdAffix.menu_selector).height(), jQuery(tdAffix.menu_selector).addClass("td-affix")) : tdAffix.main_menu_height = jQuery(tdAffix.menu_selector).height();
			jQuery(tdAffix.menu_wrap_selector).css("height", tdAffix.main_menu_height)
		},
		_affix_on: function(a) {
			!1 === tdAffix.is_menu_affix ? ("smart_snap_always" === tdAffix.tds_snap_menu && !0 !== tdDetect.isPhoneScreen && a.css("visibility", "hidden"), tdAffix.menu_offset = -tdAffix.top_offset, a.addClass("td-affix"), jQuery("body").addClass("body-td-affix"),
				tdAffix.is_menu_affix = !0) : !0 !== tdDetect.isPhoneScreen && a.css("visibility", "")
		},
		_affix_off: function(a) {
			!0 === tdAffix.is_menu_affix && (jQuery(tdAffix.menu_selector).removeClass("td-affix"), "" === tdAffix.tds_snap_menu_logo && jQuery(".td-main-menu-logo").removeClass("td-logo-sticky"), jQuery("body").removeClass("body-td-affix"), tdAffix.is_menu_affix = !1, tdUtil.tdMoveY(a[0], 0), (!0 === tdDetect.isIos || tdDetect.isSafari) && a.show())
		}
	}
})();
"use strict";
jQuery().ready(function() {
	td_retina();
	td_mobile_menu_toogle();
	td_resize_videos();
	jQuery("input, textarea").placeholder();
	td_more_articles_box.init();
	td_smart_lists_magnific_popup();
	td_smart_list_dropdown();
	if ("undefined" !== typeof tdsDateFormat) {
		var a = Math.floor((new Date).getTime() / 1E3),
			a = td_date_i18n(tdsDateFormat, a);
		jQuery(".td_data_time").text(a)
	}
	setMenuMinHeight()
});

function td_smart_list_dropdown() {
	jQuery(".td-smart-list-dropdown").on("change", function() {
		window.location = this.value
	})
}
var td_more_articles_box = {
		is_box_visible: !1,
		cookie: "",
		distance_from_top: 400,
		init: function() {
			td_more_articles_box.cookie = td_read_site_cookie("td-cookie-more-articles");
			!isNaN(parseInt(tds_more_articles_on_post_pages_distance_from_top)) && isFinite(tds_more_articles_on_post_pages_distance_from_top) && 0 < parseInt(tds_more_articles_on_post_pages_distance_from_top) ? td_more_articles_box.distance_from_top = parseInt(tds_more_articles_on_post_pages_distance_from_top) : td_more_articles_box.distance_from_top = 400;
			jQuery(".td-close-more-articles-box").click(function() {
				jQuery(".td-more-articles-box").removeClass("td-front-end-display-block");
				jQuery(".td-more-articles-box").hide();
				!isNaN(parseInt(tds_more_articles_on_post_time_to_wait)) && isFinite(tds_more_articles_on_post_time_to_wait) && td_set_cookies_life(["td-cookie-more-articles", "hide-more-articles-box", 864E5 * parseInt(tds_more_articles_on_post_time_to_wait)])
			})
		},
		td_events_scroll: function(a) {
			tdIsScrollingAnimation || "show" != tdUtil.getBackendVar("tds_more_articles_on_post_enable") ||
				"hide-more-articles-box" == td_more_articles_box.cookie || (a > td_more_articles_box.distance_from_top ? !1 === td_more_articles_box.is_box_visible && (jQuery(".td-more-articles-box").addClass("td-front-end-display-block"), td_more_articles_box.is_box_visible = !0) : !0 === td_more_articles_box.is_box_visible && (jQuery(".td-more-articles-box").removeClass("td-front-end-display-block"), td_more_articles_box.is_box_visible = !1))
		}
	},
	td_resize_timer_id;
jQuery(window).resize(function() {
	clearTimeout(td_resize_timer_id);
	td_resize_timer_id = setTimeout(function() {
		td_done_resizing()
	}, 200)
});

function td_done_resizing() {
	td_resize_videos()
}

function td_resize_videos() {
	jQuery(document).find('iframe[src*="youtube.com"]').each(function() {
		var a = jQuery(this).parent().parent().parent(),
			b = jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo"),
			c = a.hasClass("vc_video-aspect-ratio-43"),
			a = a.hasClass("vc_video-aspect-ratio-235");
		b || c || a || (b = jQuery(this), b.attr("width", "100%"), c = b.width(), b.css("height", .5625 * c, "important"))
	});
	jQuery(document).find('iframe[src*="vimeo.com"]').each(function() {
		var a = jQuery(this).parent().parent().parent(),
			b = jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo"),
			c = a.hasClass("vc_video-aspect-ratio-43"),
			a = a.hasClass("vc_video-aspect-ratio-235");
		b || c || a || (b = jQuery(this), b.attr("width", "100%"), c = b.width(), b.css("height", .5625 * c, "important"))
	});
	jQuery(document).find('iframe[src*="dailymotion.com"]').each(function() {
		var a = jQuery(this).parent().parent().parent(),
			b = a.hasClass("vc_video-aspect-ratio-43"),
			a = a.hasClass("vc_video-aspect-ratio-235");
		b || a || (b = jQuery(this), b.attr("width", "100%"), a = b.width(),
			b.css("height", .6 * a, "important"))
	});
	jQuery(document).find(".wp-video-shortcode").each(function() {
		var a = jQuery(this),
			b = a.width() + 3;
		jQuery(this).parent().css("height", .56 * b, "important");
		a.css("width", "100%", "important");
		a.css("height", "100%", "important")
	})
}

function td_mobile_menu() {}

function td_mobile_menu_toogle() {
	jQuery("#td-top-mobile-toggle a, .td-mobile-close a").click(function() {
		jQuery("body").hasClass("td-menu-mob-open-menu") ? jQuery("body").removeClass("td-menu-mob-open-menu") : jQuery("body").addClass("td-menu-mob-open-menu")
	});
	jQuery(document).find("#td-mobile-nav .menu-item-has-children").each(function(a) {
		a = "td_mobile_elem_with_submenu_" + a;
		jQuery(this).addClass(a);
		jQuery(this).children("a").addClass("td-link-element-after");
		jQuery(this).click(function(a) {
			var c = jQuery(a.target);
			!c.length || !c.hasClass("td-element-after") && !c.hasClass("td-link-element-after") || "#" !== c.attr("href") && void 0 !== c.attr("href") || (a.preventDefault(), a.stopPropagation(), jQuery(this).toggleClass("td-sub-menu-open"))
		})
	})
}

function td_retina() {
	1 < window.devicePixelRatio && (jQuery(".td-retina").each(function(a) {
		a = jQuery(this).attr("src").replace(".png", "@2x.png");
		a = a.replace(".jpg", "@2x.jpg");
		jQuery(this).attr("src", a)
	}), jQuery(".td-retina-data").each(function(a) {
		jQuery(this).attr("src", jQuery(this).data("retina"));
		jQuery(this).addClass("td-retina-version")
	}))
}
tdDetect.isTouchDevice || "" == tdUtil.getBackendVar("td_ad_background_click_link") || jQuery("body").click(function(a) {
	a = jQuery(a.target ? a.target : a.srcElement);
	if (a.hasClass("td-outer-container") || a.hasClass("td-boxed-layout")) "_blank" == td_ad_background_click_target ? window.open(td_ad_background_click_link) : location.href = td_ad_background_click_link
});

function td_read_site_cookie(a) {
	a = escape(a) + "=";
	for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
		for (var d = b[c];
			" " == d.charAt(0);) d = d.substring(1, d.length);
		if (0 == d.indexOf(a)) return unescape(d.substring(a.length, d.length))
	}
	return null
}

function td_set_cookies_life(a) {
	var b = new Date;
	b.setTime(b.getTime() + a[2]);
	document.cookie = a[0] + "=" + a[1] + "; expires=" + b.toGMTString() + "; path=/"
}
var tdIsScrollingAnimation = !1,
	td_mouse_wheel_or_touch_moved = !1;
jQuery(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(a) {
	!1 !== tdIsScrollingAnimation && (tdIsScrollingAnimation = !1, td_mouse_wheel_or_touch_moved = !0, jQuery("html, body").stop())
});
document.addEventListener && document.addEventListener("touchmove", function(a) {
	!1 !== tdIsScrollingAnimation && (tdIsScrollingAnimation = !1, td_mouse_wheel_or_touch_moved = !0, jQuery("html, body").stop())
}, !1);
var td_scroll_to_top_is_visible = !1;

function td_events_scroll_scroll_to_top(a) {
	tdIsScrollingAnimation || (400 < a ? !1 === td_scroll_to_top_is_visible && (td_scroll_to_top_is_visible = !0, jQuery(".td-scroll-up").addClass("td-scroll-up-visible")) : !0 === td_scroll_to_top_is_visible && (td_scroll_to_top_is_visible = !1, jQuery(".td-scroll-up").removeClass("td-scroll-up-visible")))
}
jQuery(".td-scroll-up").click(function() {
	if (!tdIsScrollingAnimation) return td_scroll_to_top_is_visible = !1, jQuery(".td-scroll-up").removeClass("td-scroll-up-visible"), td_more_articles_box.is_box_visible = !1, jQuery(".td-more-articles-box").removeClass("td-front-end-display-block"), tdUtil.scrollToPosition(0, 1200), !1
});
jQuery(".td-read-down a").click(function(a) {
	a.preventDefault();
	tdUtil.scrollToPosition(jQuery(".td-full-screen-header-image-wrap").height(), 1200)
});

function td_post_template_6_title() {
	function a() {
		d = jQuery(document).scrollTop();
		if (950 >= d) {
			var a = 1 - d / 800;
			!0 === tdDetect.isIe8 && (a = 1);
			a = Math.round(100 * a) / 100;
			b.style.opacity = a;
			tdUtil.tdMoveY(c, - -Math.round(d / 4));
			e = -Math.round(d / 8);
			tdUtil.tdMoveY(b, -e)
		}
		g = !1
	}
	var b = document.getElementById("td_parallax_header_6"),
		c = document.getElementById("td-full-screen-header-image"),
		d = "",
		e;
	jQuery(window).scroll(function() {
		!1 === g && window.requestAnimationFrame(a);
		g = !0
	});
	var g = !1
}

function td_smart_lists_magnific_popup() {
	jQuery(".td-lightbox-enabled").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Loading image #%curr%...",
		mainClass: "mfp-img-mobile",
		gallery: {
			enabled: !0,
			navigateByImgClick: !0,
			preload: [0, 1],
			tCounter: tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")
		},
		image: {
			tError: "<a href='%url%'>The image #%curr%</a> could not be loaded.",
			titleSrc: function(a) {
				return a.el.attr("data-caption")
			}
		},
		zoom: {
			enabled: !0,
			duration: 300,
			opener: function(a) {
				return a.find("img")
			}
		},
		callbacks: {
			change: function(a) {
				if ("" != a.el[0].id) {
					var b = a.el[0].id.split("_");
					jQuery(".td-iosSlider").iosSlider("goToSlide", parseInt(b[1]) + 1)
				} else tdModalImageLastEl = a.el, setTimeout(function() {
					tdUtil.scrollIntoView(a.el)
				}, 100)
			},
			beforeClose: function() {
				"" != tdModalImageLastEl && tdUtil.scrollIntoView(tdModalImageLastEl)
			}
		}
	})
}

function td_get_document_width() {
	var a = 0;
	self.innerHeight ? a = self.innerWidth : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientWidth : document.body && (a = document.body.clientWidth);
	return a
}

function td_get_document_height() {
	var a = 0;
	self.innerHeight ? a = self.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && (a = document.body.clientHeight);
	return a
}

function setMenuMinHeight() {
	if ("undefined" === typeof tdEvents.previousWindowInnerWidth) tdEvents.previousWindowInnerWidth = tdEvents.window_innerWidth;
	else if (tdEvents.previousWindowInnerWidth === tdEvents.window_innerWidth) return;
	tdEvents.previousWindowInnerWidth = tdEvents.window_innerWidth;
	var a = jQuery("#td-mobile-nav"),
		b = tdEvents.window_innerHeight + 1;
	a.length && a.css("min-height", b + "px");
	if (tdDetect.isMobileDevice) {
		var a = jQuery(".td-menu-background"),
			c = jQuery(".td-search-background");
		a.length && a.css("height",
			b + 70 + "px");
		c.length && c.css("height", b + 70 + "px")
	}
}
var tdLoadingBox = {};
(function() {
	tdLoadingBox = {
		speed: 40,
		arrayColorsTemp: "rgba(99, 99, 99, 0);rgba(99, 99, 99, 0.05);rgba(99, 99, 99, 0.08);rgba(99, 99, 99, 0.2);rgba(99, 99, 99, 0.3);rgba(99, 99, 99, 0.5);rgba(99, 99, 99, 0.6);rgba(99, 99, 99, 1)".split(";"),
		arrayColors: [],
		statusAnimation: "stop",
		stop: function() {
			tdLoadingBox.statusAnimation = "stop"
		},
		init: function(a, b) {
			!1 === tdUtil.isUndefined(b) && (tdLoadingBox.speed = b);
			var c = /^#[a-zA-Z0-9]{3,6}$/;
			a && c.test(a) ? (c = tdLoadingBox.hexToRgb(a), c = "rgba(" + c.r + ", " + c.g + ", " + c.b + ", ",
				tdLoadingBox.arrayColors[7] = c + " 0.9)", tdLoadingBox.arrayColors[6] = c + " 0.7)", tdLoadingBox.arrayColors[5] = c + " 0.5)", tdLoadingBox.arrayColors[4] = c + " 0.3)", tdLoadingBox.arrayColors[3] = c + " 0.15)", tdLoadingBox.arrayColors[2] = c + " 0.15)", tdLoadingBox.arrayColors[1] = c + " 0.15)", tdLoadingBox.arrayColors[0] = c + " 0.15)") : tdLoadingBox.arrayColors = tdLoadingBox.arrayColorsTemp.slice(0);
			"stop" === tdLoadingBox.statusAnimation && (tdLoadingBox.statusAnimation = "display", this.render())
		},
		render: function(a) {
			tdLoadingBox.animationDisplay('<div class="td-lb-box td-lb-box-1" style="background-color:' +
				tdLoadingBox.arrayColors[0] + '"></div><div class="td-lb-box td-lb-box-2" style="background-color:' + tdLoadingBox.arrayColors[1] + '"></div><div class="td-lb-box td-lb-box-3" style="background-color:' + tdLoadingBox.arrayColors[2] + '"></div><div class="td-lb-box td-lb-box-4" style="background-color:' + tdLoadingBox.arrayColors[3] + '"></div><div class="td-lb-box td-lb-box-5" style="background-color:' + tdLoadingBox.arrayColors[4] + '"></div><div class="td-lb-box td-lb-box-6" style="background-color:' + tdLoadingBox.arrayColors[5] +
				'"></div><div class="td-lb-box td-lb-box-7" style="background-color:' + tdLoadingBox.arrayColors[6] + '"></div><div class="td-lb-box td-lb-box-8" style="background-color:' + tdLoadingBox.arrayColors[7] + '"></div>');
			a = [tdLoadingBox.arrayColors[0], tdLoadingBox.arrayColors[1], tdLoadingBox.arrayColors[2], tdLoadingBox.arrayColors[3], tdLoadingBox.arrayColors[4], tdLoadingBox.arrayColors[5], tdLoadingBox.arrayColors[6], tdLoadingBox.arrayColors[7]];
			tdLoadingBox.arrayColors[0] = a[7];
			tdLoadingBox.arrayColors[1] = a[0];
			tdLoadingBox.arrayColors[2] = a[1];
			tdLoadingBox.arrayColors[3] = a[2];
			tdLoadingBox.arrayColors[4] = a[3];
			tdLoadingBox.arrayColors[5] = a[4];
			tdLoadingBox.arrayColors[6] = a[5];
			tdLoadingBox.arrayColors[7] = a[6];
			"display" === tdLoadingBox.statusAnimation ? setTimeout(tdLoadingBox.render, tdLoadingBox.speed) : tdLoadingBox.animationDisplay("")
		},
		animationDisplay: function(a) {
			jQuery(".td-loader-gif").html(a)
		},
		hexToRgb: function(a) {
			return (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
				r: parseInt(a[1], 16),
				g: parseInt(a[2],
					16),
				b: parseInt(a[3], 16)
			} : null
		}
	}
})();
var tdAjaxSearch = {};
jQuery().ready(function() {
	tdAjaxSearch.init()
});
(function() {
	tdAjaxSearch = {
		_current_selection_index: 0,
		_last_request_results_count: 0,
		_first_down_up: !0,
		_is_search_open: !1,
		init: function() {
			jQuery(document).click(function(a) {
				"td-icon-search" !== a.target.className && "td-header-search" !== a.target.id && "td-header-search-top" !== a.target.id && !0 === tdAjaxSearch._is_search_open && tdAjaxSearch.hide_search_box()
			});
			jQuery("#td-header-search-button").click(function(a) {
				a.preventDefault();
				!0 === tdAjaxSearch._is_search_open ? tdAjaxSearch.hide_search_box() : tdAjaxSearch.show_search_box()
			});
			jQuery("#td-header-search-button-mob").click(function(a) {
				jQuery("body").addClass("td-search-opened");
				0 < jQuery("#td-header-search-mob").val().trim().length && tdAjaxSearch.do_ajax_call_mob()
			});
			jQuery(".td-search-close a").click(function() {
				jQuery("body").removeClass("td-search-opened")
			});
			jQuery("#td-header-search").keydown(function(a) {
				if (a.which && 39 === a.which || a.keyCode && 39 === a.keyCode || a.which && 37 === a.which || a.keyCode && 37 === a.keyCode) tdAjaxSearch.td_aj_search_input_focus();
				else {
					if (a.which && 13 === a.which ||
						a.keyCode && 13 === a.keyCode) return a = jQuery(".td-aj-cur-element"), 0 < a.length ? (a = a.find(".entry-title a").attr("href"), window.location = a) : jQuery(this).parent().parent().submit(), !1;
					if (a.which && 40 === a.which || a.keyCode && 40 === a.keyCode) return tdAjaxSearch.move_prompt_down(), !1;
					if (a.which && 38 === a.which || a.keyCode && 38 === a.keyCode) return tdAjaxSearch.move_prompt_up(), !1;
					(a.which && 8 === a.which || a.keyCode && 8 === a.keyCode) && 1 === jQuery(this).val().length && jQuery("#td-aj-search").empty();
					tdAjaxSearch.td_aj_search_input_focus();
					setTimeout(function() {
						tdAjaxSearch.do_ajax_call()
					}, 100);
					return !0
				}
			});
			jQuery("#td-header-search-mob").keydown(function(a) {
				if (a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) return a = jQuery(".td-aj-cur-element"), 0 < a.length ? (a = a.find(".entry-title a").attr("href"), window.location = a) : jQuery(this).parent().parent().submit(), !1;
				(a.which && 8 === a.which || a.keyCode && 8 === a.keyCode) && 1 === jQuery(this).val().length && jQuery("#td-aj-search-mob").empty();
				setTimeout(function() {
					tdAjaxSearch.do_ajax_call_mob()
				}, 100);
				return !0
			})
		},
		show_search_box: function() {
			jQuery(".td-drop-down-search").addClass("td-drop-down-search-open");
			!0 !== tdDetect.isIos && setTimeout(function() {
				document.getElementById("td-header-search").focus()
			}, 200);
			tdAjaxSearch._is_search_open = !0
		},
		hide_search_box: function() {
			jQuery(".td-drop-down-search").removeClass("td-drop-down-search-open");
			tdAjaxSearch._is_search_open = !1
		},
		td_aj_search_move_prompt_up: function() {
			!0 === tdAjaxSearch._first_down_up ? (tdAjaxSearch._first_down_up = !1, 0 === tdAjaxSearch._current_selection_index ?
				tdAjaxSearch._current_selection_index = tdAjaxSearch._last_request_results_count - 1 : tdAjaxSearch._current_selection_index--) : 0 === tdAjaxSearch._current_selection_index ? tdAjaxSearch._current_selection_index = tdAjaxSearch._last_request_results_count : tdAjaxSearch._current_selection_index--;
			tdAjaxSearch._repaintCurrentElement()
		},
		move_prompt_down: function() {
			!0 === tdAjaxSearch._first_down_up ? tdAjaxSearch._first_down_up = !1 : tdAjaxSearch._current_selection_index === tdAjaxSearch._last_request_results_count ? tdAjaxSearch._current_selection_index =
				0 : tdAjaxSearch._current_selection_index++;
			tdAjaxSearch._repaintCurrentElement()
		},
		_repaintCurrentElement: function() {
			jQuery(".td_module_wrap").removeClass("td-aj-cur-element");
			tdAjaxSearch._current_selection_index > tdAjaxSearch._last_request_results_count - 1 ? jQuery(".td-search-form").fadeTo(100, 1) : (tdAjaxSearch.td_aj_search_input_remove_focus(), jQuery(".td_module_wrap").eq(tdAjaxSearch._current_selection_index).addClass("td-aj-cur-element"))
		},
		td_aj_search_input_focus: function() {
			tdAjaxSearch._current_selection_index =
				0;
			tdAjaxSearch._first_down_up = !0;
			jQuery(".td-search-form").fadeTo(100, 1);
			jQuery(".td_module_wrap").removeClass("td-aj-cur-element")
		},
		td_aj_search_input_remove_focus: function() {
			0 !== tdAjaxSearch._last_request_results_count && jQuery(".td-search-form").css("opacity", .5)
		},
		process_ajax_response: function(a) {
			var b = jQuery("#td-header-search").val();
			"" === b ? jQuery("#td-aj-search").empty() : (a = jQuery.parseJSON(a), a.td_search_query === b && (tdAjaxSearch._current_selection_index = 0, tdAjaxSearch._last_request_results_count =
				a.td_total_in_list, tdAjaxSearch._first_down_up = !0, jQuery("#td-aj-search").html(a.td_data), "undefined" !== typeof window.tdAnimationStack && !0 === window.tdAnimationStack.activated && (window.tdAnimationStack.check_for_new_items("#td-aj-search .td-animation-stack", window.tdAnimationStack.SORTED_METHOD.sort_left_to_right, !0), window.tdAnimationStack.compute_items())))
		},
		process_ajax_response_mob: function(a) {
			var b = jQuery("#td-header-search-mob").val();
			"" === b ? jQuery("#td-aj-search-mob").empty() : (a = jQuery.parseJSON(a),
				a.td_search_query === b && (jQuery("#td-aj-search-mob").html(a.td_data), "undefined" !== typeof window.tdAnimationStack && !0 === window.tdAnimationStack.activated && (window.tdAnimationStack.check_for_new_items("#td-aj-search-mob .td-animation-stack", window.tdAnimationStack.SORTED_METHOD.sort_left_to_right, !0), window.tdAnimationStack.compute_items())))
		},
		do_ajax_call: function() {
			var a = jQuery("#td-header-search").val();
			"" === a ? tdAjaxSearch.td_aj_search_input_focus() : tdLocalCache.exist(a) ? tdAjaxSearch.process_ajax_response(tdLocalCache.get(a)) :
				jQuery.ajax({
					type: "POST",
					url: td_ajax_url,
					data: {
						action: "td_ajax_search",
						td_string: a
					},
					success: function(b, c, d) {
						tdLocalCache.set(a, b);
						tdAjaxSearch.process_ajax_response(b)
					},
					error: function(a, c, d) {}
				})
		},
		do_ajax_call_mob: function() {
			var a = jQuery("#td-header-search-mob").val();
			"" !== a && (tdLocalCache.exist(a) ? tdAjaxSearch.process_ajax_response_mob(tdLocalCache.get(a)) : jQuery.ajax({
				type: "POST",
				url: td_ajax_url,
				data: {
					action: "td_ajax_search",
					td_string: a
				},
				success: function(b, c, d) {
					tdLocalCache.set(a, b);
					tdAjaxSearch.process_ajax_response_mob(b)
				},
				error: function(a, c, d) {}
			}))
		}
	}
})();
"use strict";
jQuery().ready(function() {
	tdModalImage();
	tdUtil.imageMoveClassToFigure("td-post-image-full");
	tdUtil.imageMoveClassToFigure("td-post-image-right");
	tdUtil.imageMoveClassToFigure("td-post-image-left");
	"undefined" !== typeof window.tds_general_modal_image && "" !== window.tds_general_modal_image && jQuery(".single .td-post-content a > img").filter(function(a, b) {
		-1 !== b.className.indexOf("wp-image") && jQuery(b).parent().addClass("td-modal-image")
	})
});
var tdModalImageLastEl = "";

function tdModalImage() {
	jQuery("figure.wp-caption").each(function() {
		var a = jQuery(this).children("figcaption").html();
		jQuery(this).children("a").data("caption", a)
	});
	jQuery(".td-modal-image").each(function() {
		jQuery(this).parent().addClass("td-modal-image");
		jQuery(this).removeClass("td-modal-image")
	});
	jQuery("article").magnificPopup({
		type: "image",
		delegate: ".td-modal-image",
		gallery: {
			enabled: !0,
			tPrev: tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),
			tNext: tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),
			tCounter: tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")
		},
		ajax: {
			tError: tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")
		},
		image: {
			tError: tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),
			titleSrc: function(a) {
				a = jQuery(a.el).data("caption");
				return "undefined" !== typeof a ? a : ""
			}
		},
		zoom: {
			enabled: !0,
			duration: 300,
			opener: function(a) {
				return a.find("img")
			}
		},
		callbacks: {
			change: function(a) {
				tdModalImageLastEl = a.el;
				tdUtil.scrollIntoView(a.el)
			},
			beforeClose: function() {
				tdAffix.allow_scroll = !1;
				tdUtil.scrollIntoView(tdModalImageLastEl);
				var a = setInterval(function() {
					tdIsScrollingAnimation ||
						(clearInterval(a), setTimeout(function() {
							tdAffix.allow_scroll = !0
						}, 100))
				}, 100)
			}
		}
	});
	"undefined" === typeof jetpackCarouselStrings && (jQuery("figure.gallery-item").each(function() {
			var a = jQuery(this).children("figcaption").html();
			jQuery(this).find("a").data("caption", a)
		}), jQuery(".tiled-gallery").magnificPopup({
			type: "image",
			delegate: "a",
			gallery: {
				enabled: !0,
				tPrev: tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),
				tNext: tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),
				tCounter: tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")
			},
			ajax: {
				tError: tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")
			},
			image: {
				tError: tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),
				titleSrc: function(a) {
					a = jQuery(a.el).parent().find(".tiled-gallery-caption").text();
					return "undefined" !== typeof a ? a : ""
				}
			},
			zoom: {
				enabled: !0,
				duration: 300,
				opener: function(a) {
					return a.find("img")
				}
			},
			callbacks: {
				change: function(a) {
					tdModalImageLastEl = a.el;
					tdUtil.scrollIntoView(a.el)
				},
				beforeClose: function() {
					tdUtil.scrollIntoView(tdModalImageLastEl)
				}
			}
		}),
		jQuery(".gallery").magnificPopup({
			type: "image",
			delegate: ".gallery-icon > a",
			gallery: {
				enabled: !0,
				tPrev: tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),
				tNext: tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),
				tCounter: tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")
			},
			ajax: {
				tError: tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")
			},
			image: {
				tError: tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),
				titleSrc: function(a) {
					a = jQuery(a.el).data("caption");
					return "undefined" !== typeof a ? a : ""
				}
			},
			zoom: {
				enabled: !0,
				duration: 300,
				opener: function(a) {
					return a.find("img")
				}
			},
			callbacks: {
				change: function(a) {
					tdModalImageLastEl = a.el;
					tdUtil.scrollIntoView(a.el)
				},
				beforeClose: function() {
					tdUtil.scrollIntoView(tdModalImageLastEl)
				}
			}
		}))
}
var tdBlocks = {};
(function() {
	function a() {
		function a(b, k) {
			!0 === d && b.target === e ? window.location = b.target : (d = !0, e = b.target, b.preventDefault(), setTimeout(function() {
				d = !1
			}, 300), c(b, k))
		}

		function c(a, b) {
			var c = b.data("td_block_id"),
				d = tdBlocks.tdGetBlockObjById(c);
			d.is_ajax_running = !0;
			jQuery(".mega-menu-sub-cat-" + c).removeClass("cur-sub-cat");
			b.addClass("cur-sub-cat");
			d.td_filter_value = b.data("td_filter_value");
			d.td_current_page = 1;
			tdBlocks.tdAjaxDoBlockRequest(d, "mega_menu")
		}
		jQuery(".td-ajax-next-page").click(function(a) {
			a.preventDefault();
			a = tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));
			jQuery(this).hasClass("ajax-page-disabled") || !0 === a.is_ajax_running || (a.is_ajax_running = !0, a.td_current_page++, tdBlocks.tdAjaxDoBlockRequest(a, "next"))
		});
		jQuery(".td-ajax-prev-page").click(function(a) {
			a.preventDefault();
			a = tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));
			jQuery(this).hasClass("ajax-page-disabled") || !0 === a.is_ajax_running || (a.is_ajax_running = !0, a.td_current_page--, tdBlocks.tdAjaxDoBlockRequest(a, "back"))
		});
		jQuery(".td_ajax_load_more_js").click(function(a) {
			a.preventDefault();
			jQuery(this).hasClass("ajax-page-disabled") || (jQuery(this).css("visibility", "hidden"), a = tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id")), a.td_current_page++, tdBlocks.tdAjaxDoBlockRequest(a, "load_more"), a.max_num_pages <= a.td_current_page && jQuery(this).addClass("ajax-page-disabled"))
		});
		tdDetect.isMobileDevice ? jQuery(".td-pulldown-filter-display-option").click(function() {
			var a = jQuery(this).data("td_block_id");
			jQuery("#td_pulldown_" + a).addClass("td-pulldown-filter-list-open");
			a = jQuery("#td_pulldown_" +
				a + "_list");
			a.removeClass("fadeOut");
			a.addClass("td_animated td_fadeIn")
		}) : jQuery(".td-pulldown-filter-display-option").hover(function() {
			var a = jQuery(this).data("td_block_id");
			jQuery("#td_pulldown_" + a).addClass("td-pulldown-filter-list-open");
			a = jQuery("#td_pulldown_" + a + "_list");
			a.removeClass("fadeOut");
			a.addClass("td_animated td_fadeIn");
			a.css("visibility", "visible")
		}, function() {
			var a = jQuery(this).data("td_block_id");
			jQuery("#td_pulldown_" + a).removeClass("td-pulldown-filter-list-open")
		});
		jQuery(".td-related-title a").click(function(a) {
			a.preventDefault();
			jQuery(".td-related-title").children("a").removeClass("td-cur-simple-item");
			jQuery(this).addClass("td-cur-simple-item");
			a = jQuery(this).data("td_block_id");
			a = tdBlocks.tdGetBlockObjById(a);
			a.td_filter_value = jQuery(this).data("td_filter_value");
			a.td_current_page = 1;
			tdBlocks.tdAjaxDoBlockRequest(a, "pull_down")
		});
		var d = !1,
			e = "";
		tdDetect.isTouchDevice ? jQuery(".block-mega-child-cats a").click(function(c) {
			a(c, jQuery(this))
		}, !1).each(function(c, d) {
			d.addEventListener("touchend", function(c) {
				a(c, jQuery(this))
			}, !1)
		}) : jQuery(".block-mega-child-cats a").hover(function(a) {
			c(a, jQuery(this))
		}, function(a) {});
		jQuery(".td-subcat-item a").click(function(a) {
			a.preventDefault();
			a = tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));
			!0 !== a.is_ajax_running && (a.is_ajax_running = !0, jQuery("." + jQuery(this).data("td_block_id") + "_rand").find(".td-cur-simple-item").removeClass("td-cur-simple-item"), jQuery(this).addClass("td-cur-simple-item"), a.td_filter_value = jQuery(this).data("td_filter_value"), a.td_current_page = 1,
				tdBlocks.tdAjaxDoBlockRequest(a, "pull_down"))
		});
		jQuery(".td-pulldown-filter-link").click(function(a) {
			a.preventDefault();
			var b = jQuery(this).data("td_block_id");
			jQuery("#" + b).find(".iosSlider").iosSlider("destroy");
			var c = tdBlocks.tdGetBlockObjById(b);
			!0 !== c.is_ajax_running && (c.is_ajax_running = !0, c.td_filter_value = jQuery(this).data("td_filter_value"), jQuery("." + jQuery(this).data("td_block_id") + "_rand").find(".td-cur-simple-item").removeClass("td-cur-simple-item"), jQuery(this).addClass("td-cur-simple-item"),
				c.td_current_page = 1, tdBlocks.tdPullDownFilterChangeValue(b, "<span>" + jQuery(this).html() + ' </span><i class="td-icon-menu-down"></i>'), jQuery("#td_pulldown_" + b).removeClass("td-pulldown-filter-list-open"), tdBlocks.tdAjaxDoBlockRequest(c, "pull_down"), tdDetect.isMobileDevice && tdUtil.stopBubble(a))
		})
	}
	jQuery().ready(function() {
		a()
	});
	tdBlocks = {
		tdPullDownFilterChangeValue: function(a, c) {
			jQuery("#td-pulldown-" + a + "-val").html(c)
		},
		tdAjaxDoBlockRequest: function(a, c) {
			var d = JSON.stringify(a);
			if (tdLocalCache.exist(d)) return tdBlocks.tdBlockAjaxLoadingStart(a, !0, c), tdBlocks.tdAjaxBlockProcessResponse(tdLocalCache.get(d), c), "cache_hit";
			tdBlocks.tdBlockAjaxLoadingStart(a, !1, c);
			jQuery.ajax({
				type: "POST",
				url: td_ajax_url,
				cache: !0,
				data: {
					action: "td_ajax_block",
					td_atts: a.atts,
					td_block_id: a.id,
					td_column_number: a.td_column_number,
					td_current_page: a.td_current_page,
					block_type: a.block_type,
					td_filter_value: a.td_filter_value,
					td_user_action: a.td_user_action
				},
				success: function(a, b, k) {
					tdLocalCache.set(d, a);
					tdBlocks.tdAjaxBlockProcessResponse(a, c)
				},
				error: function(a, b, c) {}
			})
		},
		tdAjaxBlockProcessResponse: function(a, c) {
			var d = jQuery.parseJSON(a);
			if ("load_more" === c || "infinite_load" === c) {
				for (var e = 0; e < tdSmartSidebar.items.length; e++) "case_3_bottom_of_content" === tdSmartSidebar.items[e].sidebar_state && (tdSmartSidebar.items[e].sidebar_state = "case_1_fixed_down");
				jQuery(d.td_data).appendTo("#" + d.td_block_id)
			} else jQuery("#" + d.td_block_id).html(d.td_data);
			!0 === d.td_hide_prev ? jQuery("#prev-page-" + d.td_block_id).addClass("ajax-page-disabled") : jQuery("#prev-page-" + d.td_block_id).removeClass("ajax-page-disabled");
			!0 === d.td_hide_next ? jQuery("#next-page-" + d.td_block_id).addClass("ajax-page-disabled") : jQuery("#next-page-" + d.td_block_id).removeClass("ajax-page-disabled");
			e = tdBlocks.tdGetBlockObjById(d.td_block_id);
			"slide" === e.block_type && jQuery("#" + d.td_block_id + " .slide-wrap-active-first").addClass("slide-wrap-active");
			e.is_ajax_running = !1;
			tdBlocks.tdBlockAjaxLoadingEnd(d, e, c)
		},
		tdBlockAjaxLoadingStart: function(a, c, d) {
			var e = jQuery("#" + a.id);
			jQuery(".td-loader-gif").remove();
			e.removeClass("td_fadeInRight td_fadeInLeft td_fadeInDown td_fadeInUp td_animated_xlong");
			e.addClass("td_block_inner_overflow");
			var g = e.height();
			e.css("height", g);
			!1 === c && ("load_more" === d ? (e.parent().append('<div class="td-loader-gif td-loader-infinite td-loader-blocks-load-more  td-loader-animation-start"></div>'), tdLoadingBox.init(a.header_color ? a.header_color : tds_theme_color_site_wide), setTimeout(function() {
				jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")
			}, 50)) : "infinite_load" === d ? (e.parent().append('<div class="td-loader-gif td-loader-infinite td-loader-animation-start"></div>'),
				tdLoadingBox.init(a.header_color ? a.header_color : tds_theme_color_site_wide), setTimeout(function() {
					jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")
				}, 50)) : (e.parent().append('<div class="td-loader-gif td-loader-animation-start"></div>'), tdLoadingBox.init(a.header_color ? a.header_color : tds_theme_color_site_wide), setTimeout(function() {
				jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")
			}, 50), e.addClass("td_animated_long td_fadeOut_to_1")))
		},
		tdBlockAjaxLoadingEnd: function(a, c, d) {
			jQuery(".td-loader-gif").removeClass("td-loader-animation-mid").addClass("td-loader-animation-end");
			setTimeout(function() {
				jQuery(".td-loader-gif").remove();
				tdLoadingBox.stop()
			}, 400);
			var e = jQuery("#" + c.id);
			e.removeClass("td_animated_long td_fadeOut_to_1");
			var g;
			!0 === tdAnimationStack.activated && (g = tdAnimationStack.SORTED_METHOD.sort_left_to_right);
			switch (d) {
				case "next":
					e.addClass("td_animated_xlong td_fadeInRight");
					void 0 !== g && (g = tdAnimationStack.SORTED_METHOD.sort_right_to_left);
					break;
				case "back":
					e.addClass("td_animated_xlong td_fadeInLeft");
					break;
				case "pull_down":
					e.addClass("td_animated_xlong td_fadeInDown");
					break;
				case "mega_menu":
					e.addClass("td_animated_xlong td_fadeInDown");
					break;
				case "load_more":
					setTimeout(function() {
						jQuery("." + c.id + "_rand .td_ajax_load_more_js").css("visibility", "visible")
					}, 500);
					break;
				case "infinite_load":
					setTimeout(function() {
						tdInfiniteLoader.computeTopDistances();
						"" !== a.td_data && tdInfiniteLoader.enable_is_visible_callback(c.id)
					}, 500), setTimeout(function() {
							tdInfiniteLoader.computeTopDistances()
						},
						1E3), setTimeout(function() {
						tdInfiniteLoader.computeTopDistances()
					}, 1500)
			}
			setTimeout(function() {
				jQuery(".td_block_inner_overflow").removeClass("td_block_inner_overflow");
				e.css("height", "auto");
				tdSmartSidebar.compute()
			}, 200);
			setTimeout(function() {
				tdSmartSidebar.compute()
			}, 500);
			void 0 !== g && setTimeout(function() {
				tdAnimationStack.check_for_new_items("#" + c.id + " .td-animation-stack", g, !0)
			}, 200)
		},
		tdGetBlockIndex: function(a) {
			var c = 0,
				d = 0;
			jQuery.each(tdBlocksArray, function(e, g) {
				if (g.id === a) return d = c, !1;
				c++
			});
			return d
		},
		tdGetBlockObjById: function(a) {
			return tdBlocksArray[tdBlocks.tdGetBlockIndex(a)]
		}
	}
})();
jQuery().ready(function() {
	var a = {
		type: "inline",
		preloader: !1,
		focus: "#name",
		removalDelay: 500,
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr("data-effect");
				tdLogin.clearFields();
				tdLogin.showHideMsg();
				700 > jQuery(window).width() ? this.st.focus = !1 : !1 === tdDetect.isIe && (this.st.focus = "#login_email")
			},
			beforeClose: function() {}
		},
		disableOn: function() {
			return 750 > jQuery(window).width() ? !1 : !0
		}
	};
	void 0 !== window.tds_login_sing_in_widget && (jQuery(".comment-reply-login").attr({
		href: "#login-form",
		"data-effect": "mpf-td-login-effect"
	}), jQuery(".comment-reply-login, .td-login-modal-js").magnificPopup(a));
	jQuery(".td-login-modal-js, .comment-reply-login").on("click", function(a) {
		750 > jQuery(window).width() && void 0 !== window.tds_login_sing_in_widget && (a.preventDefault(), jQuery("body").addClass("td-menu-mob-open-menu"), jQuery(".td-mobile-container").hide(), jQuery("#td-mobile-nav").addClass("td-hide-menu-content"), setTimeout(function() {
			jQuery(".td-mobile-container").show()
		}, 500), tdLogin.showHideElementsMobile([
			["#td-login-mob",
				1
			],
			["#td-register-mob", 0],
			["#td-forgot-pass-mob", 0]
		]))
	});
	jQuery("#login-link").on("click", function() {
		tdLogin.showHideElements([
			["#td-login-div", 1],
			["#td-register-div", 0],
			["#td-forgot-pass-div", 0]
		]);
		jQuery("#login-form").addClass("td-login-animation");
		700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#login_email").focus();
		tdLogin.showHideMsg()
	});
	jQuery("#register-link").on("click", function() {
		tdLogin.showHideElements([
			["#td-login-div", 0],
			["#td-register-div", 1],
			["#td-forgot-pass-div", 0]
		]);
		jQuery("#login-form").addClass("td-login-animation");
		700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#register_email").focus();
		tdLogin.showHideMsg()
	});
	jQuery("#forgot-pass-link").on("click", function(a) {
		a.preventDefault();
		tdLogin.showHideElements([
			["#td-login-div", 0],
			["#td-register-div", 0],
			["#td-forgot-pass-div", 1]
		]);
		jQuery("#login-form").addClass("td-login-animation");
		700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#forgot_email").focus();
		tdLogin.showHideMsg()
	});
	jQuery("#login_button").on("click", function() {
		tdLogin.handlerLogin()
	});
	jQuery("#login_pass").keydown(function(a) {
		(a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLogin.handlerLogin()
	});
	jQuery("#register_button").on("click", function() {
		tdLogin.handlerRegister()
	});
	jQuery("#register_user").keydown(function(a) {
		(a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLogin.handlerRegister()
	});
	jQuery("#forgot_button").on("click", function() {
		tdLogin.handlerForgotPass()
	});
	jQuery("#forgot_email").keydown(function(a) {
		(a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLogin.handlerForgotPass()
	});
	jQuery(".td-back-button").on("click", function() {
		tdLogin.showHideElements([
			["#td-login-div", 1],
			["#td-register-div", 0],
			["#td-forgot-pass-div", 0]
		]);
		jQuery("#login-form").removeClass("td-login-animation");
		jQuery(".td_display_err").hide()
	})
});
var tdLogin = {};
(function() {
	tdLogin = {
		email_pattern: /^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,
		handlerLogin: function() {
			var a = jQuery("#login_email"),
				b = jQuery("#login_pass");
			a.length && b.length && (a = a.val().trim(), b = b.val().trim(), a && b ? (tdLogin.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]), tdLogin.showHideMsg(td_please_wait), tdLogin.doAction("td_mod_login", a, "", b)) : tdLogin.showHideMsg(td_email_user_pass_incorrect))
		},
		handlerRegister: function() {
			var a =
				jQuery("#register_email"),
				b = jQuery("#register_user");
			a.length && b.length && (a = a.val().trim(), b = b.val().trim(), tdLogin.email_pattern.test(a) && b ? (tdLogin.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]), tdLogin.showHideMsg(td_please_wait), tdLogin.doAction("td_mod_register", a, b, "")) : tdLogin.showHideMsg(td_email_user_incorrect))
		},
		handlerForgotPass: function() {
			var a = jQuery("#forgot_email");
			a.length && (a = a.val().trim(), tdLogin.email_pattern.test(a) ? (tdLogin.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]),
				tdLogin.showHideMsg(td_please_wait), tdLogin.doAction("td_mod_remember_pass", a, "", "")) : tdLogin.showHideMsg(td_email_incorrect))
		},
		showHideElements: function(a) {
			if (a.constructor === Array)
				for (var b = a.length, c = 0; c < b; c++)
					if (a[c].constructor === Array && 2 === a[c].length) {
						var d = jQuery(a[c][0]);
						d.length && (1 === a[c][1] ? d.removeClass("td-display-none").addClass("td-display-block") : d.removeClass("td-display-block").addClass("td-display-none"))
					}
		},
		showHideElementsMobile: function(a) {
			if (a.constructor === Array)
				for (var b =
						a.length, c = 0; c < b; c++)
					if (a[c].constructor === Array && 2 === a[c].length) {
						var d = jQuery(a[c][0]);
						d.length && (1 === a[c][1] ? d.removeClass("td-login-hide").addClass("td-login-show") : d.removeClass("td-login-show").addClass("td-login-hide"))
					}
		},
		showTabs: function(a) {
			if (a.constructor === Array)
				for (var b = a.length, c = 0; c < b; c++)
					if (a[c].constructor === Array && 2 === a[c].length) {
						var d = jQuery(a[c][0]);
						d.length && (1 === a[c][1] ? d.addClass("td_login_tab_focus") : d.removeClass("td_login_tab_focus"))
					}
		},
		addRemoveClass: function(a) {
			if (a.constructor ===
				Array && 3 === a.length) {
				var b = jQuery(a[0]);
				b.length && (1 === a[1] ? b.addClass(a[2]) : b.removeClass(a[2]))
			}
		},
		showHideMsg: function(a) {
			var b = jQuery(".td_display_err");
			b.length && (void 0 !== a && a.constructor === String && 0 < a.length ? (b.show(), b.html(a)) : (b.hide(), b.html("")))
		},
		clearFields: function() {
			jQuery("#login_email").val("");
			jQuery("#login_pass").val("");
			jQuery("#register_email").val("");
			jQuery("#register_user").val("");
			jQuery("#forgot_email").val("")
		},
		doAction: function(a, b, c, d) {
			jQuery.ajax({
				type: "POST",
				url: td_ajax_url,
				data: {
					action: a,
					email: b,
					user: c,
					pass: d
				},
				success: function(a, b, c) {
					a = jQuery.parseJSON(a);
					switch (a[0]) {
						case "login":
							1 === a[1] ? location.reload(!0) : (tdLogin.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]), tdLogin.showHideMsg(a[2]));
							break;
						case "register":
							1 === a[1] ? tdLogin.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]) : tdLogin.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]);
							tdLogin.showHideMsg(a[2]);
							break;
						case "remember_pass":
							1 === a[1] ? tdLogin.addRemoveClass([".td_display_err", 1,
								"td_display_msg_ok"
							]) : tdLogin.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]), tdLogin.showHideMsg(a[2])
					}
				},
				error: function(a, b, c) {}
			})
		}
	}
})();
jQuery().ready(function() {
	jQuery("#login-link-mob").on("click", function() {
		tdLoginMob.showHideElements([
			["#td-login-mob", 1],
			["#td-register-mob", 0],
			["#td-forgot-pass-mob", 0]
		]);
		jQuery("#td-mobile-nav").addClass("td-hide-menu-content");
		700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#login_email-mob").focus();
		tdLoginMob.showHideMsg()
	});
	jQuery("#register-link-mob").on("click", function() {
		tdLoginMob.showHideElements([
			["#td-login-mob", 0],
			["#td-register-mob", 1],
			["#td-forgot-pass-mob", 0]
		]);
		jQuery("#td-mobile-nav").addClass("td-hide-menu-content");
		700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#register_email-mob").focus();
		tdLoginMob.showHideMsg()
	});
	jQuery("#forgot-pass-link-mob").on("click", function() {
		tdLoginMob.showHideElements([
			["#td-login-mob", 0],
			["#td-register-mob", 0],
			["#td-forgot-pass-mob", 1]
		]);
		700 < jQuery(window).width() && !1 === tdDetect.isIe && jQuery("#forgot_email-mob").focus();
		tdLoginMob.showHideMsg()
	});
	jQuery("#login_button-mob").on("click", function() {
		tdLoginMob.handlerLogin()
	});
	jQuery("#login_pass-mob").keydown(function(a) {
		(a.which &&
			13 === a.which || a.keyCode && 13 === a.keyCode) && tdLoginMob.handlerLogin()
	});
	jQuery("#register_button-mob").on("click", function() {
		tdLoginMob.handlerRegister()
	});
	jQuery("#register_user-mob").keydown(function(a) {
		(a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLoginMob.handlerRegister()
	});
	jQuery("#forgot_button-mob").on("click", function() {
		tdLoginMob.handlerForgotPass()
	});
	jQuery("#forgot_email-mob").keydown(function(a) {
		(a.which && 13 === a.which || a.keyCode && 13 === a.keyCode) && tdLoginMob.handlerForgotPass()
	});
	jQuery("#td-mobile-nav .td-login-close a, #td-mobile-nav .td-register-close a").on("click", function() {
		tdLoginMob.showHideElements([
			["#td-login-mob", 0],
			["#td-register-mob", 0],
			["#td-forgot-pass-mob", 0]
		]);
		jQuery("#td-mobile-nav").removeClass("td-hide-menu-content")
	});
	jQuery("#td-mobile-nav .td-forgot-pass-close a").on("click", function() {
		tdLoginMob.showHideElements([
			["#td-login-mob", 1],
			["#td-register-mob", 0],
			["#td-forgot-pass-mob", 0]
		])
	})
});
var tdLoginMob = {};
(function() {
	tdLoginMob = {
		email_pattern: /^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,
		handlerLogin: function() {
			var a = jQuery("#login_email-mob"),
				b = jQuery("#login_pass-mob");
			a.length && b.length && (a = a.val().trim(), b = b.val().trim(), a && b ? (tdLoginMob.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]), tdLoginMob.showHideMsg(td_please_wait), tdLoginMob.doAction("td_mod_login", a, "", b)) : tdLoginMob.showHideMsg(td_email_user_pass_incorrect))
		},
		handlerRegister: function() {
			var a =
				jQuery("#register_email-mob"),
				b = jQuery("#register_user-mob");
			a.length && b.length && (a = a.val().trim(), b = b.val().trim(), tdLoginMob.email_pattern.test(a) && b ? (tdLoginMob.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]), tdLoginMob.showHideMsg(td_please_wait), tdLoginMob.doAction("td_mod_register", a, b, "")) : tdLoginMob.showHideMsg(td_email_user_incorrect))
		},
		handlerForgotPass: function() {
			var a = jQuery("#forgot_email-mob");
			a.length && (a = a.val().trim(), tdLoginMob.email_pattern.test(a) ? (tdLoginMob.addRemoveClass([".td_display_err",
				1, "td_display_msg_ok"
			]), tdLoginMob.showHideMsg(td_please_wait), tdLoginMob.doAction("td_mod_remember_pass", a, "", "")) : tdLoginMob.showHideMsg(td_email_incorrect))
		},
		showHideElements: function(a) {
			if (a.constructor === Array)
				for (var b = a.length, c = 0; c < b; c++)
					if (a[c].constructor === Array && 2 === a[c].length) {
						var d = jQuery(a[c][0]);
						d.length && (1 === a[c][1] ? d.removeClass("td-login-hide").addClass("td-login-show") : d.removeClass("td-login-show").addClass("td-login-hide"))
					}
		},
		addRemoveClass: function(a) {
			if (a.constructor === Array &&
				3 === a.length) {
				var b = jQuery(a[0]);
				b.length && (1 === a[1] ? b.addClass(a[2]) : b.removeClass(a[2]))
			}
		},
		showHideMsg: function(a) {
			var b = jQuery(".td_display_err");
			b.length && (void 0 !== a && a.constructor === String && 0 < a.length ? (b.show(), b.html(a)) : (b.hide(), b.html("")))
		},
		clearFields: function() {
			jQuery("#login_email-mob").val("");
			jQuery("#login_pass-mob").val("");
			jQuery("#register_email-mob").val("");
			jQuery("#register_user-mob").val("");
			jQuery("#forgot_email-mob").val("")
		},
		doAction: function(a, b, c, d) {
			jQuery.ajax({
				type: "POST",
				url: td_ajax_url,
				data: {
					action: a,
					email: b,
					user: c,
					pass: d
				},
				success: function(a, b, c) {
					a = jQuery.parseJSON(a);
					switch (a[0]) {
						case "login":
							1 === a[1] ? location.reload(!0) : (tdLoginMob.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]), tdLoginMob.showHideMsg(a[2]));
							break;
						case "register":
							1 === a[1] ? tdLoginMob.addRemoveClass([".td_display_err", 1, "td_display_msg_ok"]) : tdLoginMob.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]);
							tdLoginMob.showHideMsg(a[2]);
							break;
						case "remember_pass":
							1 === a[1] ? tdLoginMob.addRemoveClass([".td_display_err",
								1, "td_display_msg_ok"
							]) : tdLoginMob.addRemoveClass([".td_display_err", 0, "td_display_msg_ok"]), tdLoginMob.showHideMsg(a[2])
					}
				},
				error: function(a, b, c) {}
			})
		}
	}
})();
var tdDemoMenu;
(function(a, b) {
	tdDemoMenu = {
		mousePosX: 0,
		mousePosY: 0,
		startTimeout: b,
		startInterval: b,
		_extendedDemo: !1,
		_currentElement: b,
		_startExtendedTimeout: b,
		_startExtendedInterval: b,
		init: function() {
			a(document).mousemove(function(a) {
				if (a.pageX || a.pageY) tdDemoMenu.mousePosX = a.pageX, tdDemoMenu.mousePosY = a.pageY;
				else if (a.clientX || a.clientY) tdDemoMenu.mousePosX = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, tdDemoMenu.mousePosY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop
			});
			a(document).mouseleave(function(c) {
				b !== tdDemoMenu.startTimeout && window.clearTimeout(tdDemoMenu.startTimeout);
				b !== tdDemoMenu.startInterval && window.clearInterval(tdDemoMenu.startInterval);
				a(".td-screen-demo:first").css("visibility", "hidden");
				a(".td-screen-demo-extend:first").hide()
			});
			a("#td-theme-settings").find(".td-skin-wrap:first").scroll(function(b) {
				b = b.currentTarget;
				var d = a(this).find(".td-skin-scroll:first");
				b.clientHeight + b.scrollTop < b.scrollHeight ? d.css({
					bottom: 0
				}) : d.css({
					bottom: -40
				})
			});
			a("#td-theme-settings").find(".td-skin-scroll:first").click(function(b) {
				b =
					a(this).closest(".td-skin-wrap");
				b.animate({
					scrollTop: b.scrollTop() + 200
				}, {
					duration: 800,
					easing: "easeInOutQuart"
				})
			}).mouseenter(function(c) {
				b !== tdDemoMenu.startTimeout && window.clearTimeout(tdDemoMenu.startTimeout);
				b !== tdDemoMenu.startInterval && window.clearInterval(tdDemoMenu.startInterval);
				a("#td-theme-settings").find(".td-screen-demo:first").css("visibility", "hidden")
			});
			a(".td-set-theme-style-link").hover(function(c) {
				b !== tdDemoMenu.startTimeout && window.clearTimeout(tdDemoMenu.startTimeout);
				b !== tdDemoMenu.startInterval &&
					window.clearInterval(tdDemoMenu.startInterval);
				var d = a(this),
					e = d.closest(".td-set-theme-style"),
					g = a(".td-screen-demo:first"),
					k, f = 0,
					p = 0;
				k = a("#wpadminbar");
				var x = g.find("img:first"),
					d = d.data("img-url");
				x.length ? x.attr("src", d) : g.html('<img src="' + d + '"/>');
				0 === a(".td-set-theme-style-link").index(this) % 2 ? f = 2 * e.outerWidth(!0) : (e = e.prev(".td-set-theme-style"), e.length && (f = e.outerWidth(!0) - 0, p = e.outerWidth(!0) + 0), c.preventDefault(), c.stopPropagation());
				c = c.pageY - document.body.scrollTop - g.outerHeight(!0) /
					2;
				c + g.outerHeight(!0) > window.innerHeight && (c -= c + g.outerHeight(!0) - window.innerHeight);
				k = k.length ? k.outerHeight(!0) : 0;
				k > c && (c = k);
				k = {
					top: c,
					right: f,
					"padding-right": p,
					width: ""
				};
				c = g.data("width-preview");
				0 < p && (k.width = c + p);
				g.css(k);
				g.data("right-value", f + p);
				g.css("visibility", "visible")
			}, function(c) {
				a(".td-screen-demo-extend:first").hide();
				var d = a(".td-screen-demo:first");
				c = d.css("right");
				var e = d.css("padding-right"),
					g = d.css("width"),
					k = parseInt(c.replace("px", "")),
					f = parseInt(e.replace("px", "")),
					p = parseInt(g.replace("px",
						""));
				c = a(this);
				tdDemoMenu._currentElement = c;
				var x = parseInt(a("#td-theme-settings").css("width").replace("px", ""));
				0 < f ? (b !== tdDemoMenu.startTimeout && (window.clearTimeout(tdDemoMenu.startTimeout), tdDemoMenu.startTimeout = b), b !== tdDemoMenu.startInterval && (window.clearInterval(tdDemoMenu.startInterval), tdDemoMenu.startInterval = b), tdDemoMenu.startTimeout = setTimeout(function() {
					tdDemoMenu._extendedDemo = !0;
					tdDemoMenu.startInterval = setInterval(function() {
						var c = d.data("width-preview");
						k += 10;
						f -= 10;
						p -= 10;
						var e = !1;
						if (0 >= f || p < c || tdDemoMenu.mousePosX <= a(window).width() - x || tdDemoMenu.mousePosX >= a(window).width() - k) b !== tdDemoMenu.startTimeout && (window.clearTimeout(tdDemoMenu.startTimeout), tdDemoMenu.startTimeout = b), b !== tdDemoMenu.startInterval && (window.clearInterval(tdDemoMenu.startInterval), tdDemoMenu.startInterval = b), f = 0, k = d.data("right-value"), p = c, tdDemoMenu.mousePosX >= a(window).width() - k && (e = !0);
						d.css({
							right: k,
							"padding-right": f,
							width: p
						});
						e ? (tdDemoMenu._extendedDemo = !1, tdDemoMenu._checkMousePosition()) : b ===
							tdDemoMenu.startTimeout && b === tdDemoMenu.startInterval && (tdDemoMenu._extendedDemo = !0, tdDemoMenu._showExtendedScreenDemo())
					}, 15)
				}, 50)) : d.css("visibility", "hidden")
			}).mousemove(function(a) {
				tdDemoMenu._moveScreenDemo(a)
			});
			a(".td-screen-demo").hover(function(b) {
				a(this).css("visibility", "visible");
				tdDemoMenu._resetTdScreeDemoExtendWidth()
			}, function(c) {
				b !== tdDemoMenu.startTimeout && (window.clearTimeout(tdDemoMenu.startTimeout), tdDemoMenu.startTimeout = b);
				b !== tdDemoMenu.startInterval && (window.clearInterval(tdDemoMenu.startInterval),
					tdDemoMenu.startInterval = b);
				a(this).css("visibility", "hidden");
				a(".td-screen-demo-extend:first").hide()
			}).mousemove(function(a) {});
			a(".td-screen-demo-extend").hover(function(c) {
				if (tdDemoMenu._extendedDemo) {
					tdDemoMenu._extendedDemo = !1;
					var d = a(this),
						e = a(".td-screen-demo:first"),
						g = parseInt(a("#td-theme-settings").css("width").replace("px", "")) / 2,
						k = g;
					d.css({
						width: g + "px",
						top: e.css("top")
					});
					d.show();
					e.css("visibility", "visible");
					tdDemoMenu._startExtendedTimeout = setTimeout(function() {
						tdDemoMenu._startExtendedInterval =
							setInterval(function() {
								k -= 10;
								var c = !1;
								if (0 > k || tdDemoMenu.mousePosX <= a(window).width() - g - k) b !== tdDemoMenu._startExtendedTimeout && (window.clearTimeout(tdDemoMenu._startExtendedTimeout), tdDemoMenu._startExtendedTimeout = b), b !== tdDemoMenu._startExtendedInterval && (window.clearInterval(tdDemoMenu._startExtendedInterval), tdDemoMenu._startExtendedInterval = b), tdDemoMenu.mousePosX <= a(window).width() - g - k && (c = !0), k = g, d.hide();
								d.css({
									width: k,
									top: e.css("top")
								});
								c && tdDemoMenu._checkMousePosition()
							}, 15)
					}, 50)
				}
			}, function(c) {
				b !==
					tdDemoMenu._startExtendedTimeout && (window.clearTimeout(tdDemoMenu._startExtendedTimeout), tdDemoMenu._startExtendedTimeout = b);
				b !== tdDemoMenu._startExtendedInterval && (window.clearInterval(tdDemoMenu._startExtendedInterval), tdDemoMenu._startExtendedInterval = b);
				tdDemoMenu._resetTdScreeDemoExtendWidth();
				a(this).hide();
				a(".td-screen-demo:first").css("visibility", "hidden")
			}).mousemove(function(a) {})
		},
		_moveScreenDemo: function(b) {
			var d = a(".td-screen-demo:first"),
				e = a("#wpadminbar"),
				g = b.pageY - document.body.scrollTop -
				d.outerHeight(!0) / 2,
				e = e.length ? e.outerHeight(!0) : 0;
			e > g && (g = e);
			0 > g ? g = 0 : a(window).height() - d.outerHeight(!0) / 2 < b.pageY - document.body.scrollTop && (g = a(window).height() - d.outerHeight(!0));
			d.css("top", g)
		},
		_resetTdScreeDemoExtendWidth: function() {
			var b = parseInt(a("#td-theme-settings").css("width").replace("px", "")) / 2;
			a(".td-screen-demo-extend:first").css({
				width: b + "px"
			})
		},
		_showExtendedScreenDemo: function() {
			tdDemoMenu._extendedDemo && a(".td-screen-demo-extend:first").css({
				top: a(".td-screen-demo:first").css("top")
			}).show()
		},
		_checkMousePosition: function() {
			var c;
			a(".td-set-theme-style-link").each(function(b, e) {
				tdDemoMenu._log(b);
				var g = a(e).closest(".td-set-theme-style"),
					k = !1,
					f = !1;
				if (0 === a(".td-set-theme-style-link").index(e) % 2) parseInt(g.position().top) + parseInt(a(window).scrollTop()) < tdDemoMenu.mousePosY && tdDemoMenu.mousePosY < parseInt(g.position().top) + parseInt(a(window).scrollTop()) + parseInt(g.outerHeight()) && (k = !0, parseInt(a(window).width()) - 2 * parseInt(g.outerWidth()) < tdDemoMenu.mousePosX && tdDemoMenu.mousePosX < parseInt(a(window).width()) -
					parseInt(g.outerWidth()) && (f = !0));
				else {
					var p = g.prev(".td-set-theme-style");
					p.length && parseInt(p.position().top) + parseInt(a(window).scrollTop()) < tdDemoMenu.mousePosY && tdDemoMenu.mousePosY < parseInt(p.position().top) + parseInt(a(window).scrollTop()) + parseInt(p.outerHeight()) && (k = !0, parseInt(a(window).width()) - parseInt(g.outerWidth()) < tdDemoMenu.mousePosX && tdDemoMenu.mousePosX < parseInt(a(window).width()) && (f = !0))
				}
				if (k && f) return c = e, !1
			});
			b === c ? a("#td-theme-settings").find(".td-screen-demo:first").css("visibility",
				"hidden") : a(c).mouseenter()
		},
		_log: function(a) {}
	}
})(jQuery);
(function() {
	if ("hide" === td_read_site_cookie("td_show_panel")) {
		var a = jQuery("#td-theme-settings");
		a.length && (a.removeClass("td-theme-settings-small"), jQuery("#td-theme-set-hide").html("DEMOS"))
	} else jQuery("#td-theme-set-hide").html("CLOSE")
})();
jQuery().ready(function() {
	!1 === tdDetect.isIos && !1 === tdDetect.isAndroid && tdDemoMenu.init();
	jQuery("#td-theme-set-hide").click(function(a) {
		a.preventDefault();
		a.stopPropagation();
		a = jQuery(this);
		var b = jQuery("#td-theme-settings");
		b.hasClass("td-theme-settings-small") ? (b.removeClass("td-theme-settings-small"), b.addClass("td-theme-settings-closed"), a.html("DEMOS"), setTimeout(function() {
			b.addClass("td-ts-closed-no-transition")
		}, 450), td_set_cookies_life(["td_show_panel", "hide", 864E5])) : (b.removeClass("td-ts-closed-no-transition"),
			b.addClass("td-theme-settings-small"), b.removeClass("td-theme-settings-closed"), a.html("CLOSE"), td_set_cookies_life(["td_show_panel", "show", 864E5]))
	})
});
var tdTrendingNow = {};
(function() {
	tdTrendingNow = {
		items: [],
		item: function() {
			this.blockUid = "";
			this.trendingNowAutostart = "manual";
			this.trendingNowPosition = this.trendingNowTimer = 0;
			this.trendingNowPosts = [];
			this._is_initialized = !1
		},
		init: function() {
			tdTrendingNow.items = []
		},
		_initialize_item: function(a) {
			!0 !== a._is_initialized && (a._is_initialized = !0)
		},
		addItem: function(a) {
			if ("undefined" === typeof a.blockUid) throw "item.blockUid is not valid";
			if ("undefined" === typeof a.trendingNowPosts || 1 > a.trendingNowPosts.length) throw "item.trendingNowPosts is not valid";
			tdTrendingNow.items.push(a);
			tdTrendingNow._initialize_item(a);
			tdTrendingNow.tdTrendingNowAutoStart(a.blockUid)
		},
		deleteItem: function(a) {
			for (var b = 0; b < tdTrendingNow.items.length; b++)
				if (tdTrendingNow.items[b].blockUid === a) return tdTrendingNow.items.splice(b, 1), !0;
			return !1
		},
		itemPrev: function(a) {
			for (var b, c = 0; c < tdTrendingNow.items.length; c++) tdTrendingNow.items[c].blockUid === a && (b = tdTrendingNow.items[c]);
			void 0 !== a && 1 >= b.trendingNowPosts.length || ("manual" !== b.trendingNowAutostart && (clearInterval(b.trendingNowTimer),
				b.trendingNowTimer = setInterval(function() {
					tdTrendingNow.tdTrendingNowChangeText([a, "left"], !0)
				}, 3E3)), tdTrendingNow.tdTrendingNowChangeText([a, "right"], !1))
		},
		itemNext: function(a) {
			for (var b, c = 0; c < tdTrendingNow.items.length; c++) tdTrendingNow.items[c].blockUid === a && (b = tdTrendingNow.items[c]);
			void 0 !== a && 1 >= b.trendingNowPosts.length || ("manual" !== b.trendingNowAutostart && (clearInterval(b.trendingNowTimer), b.trendingNowTimer = setInterval(function() {
					tdTrendingNow.tdTrendingNowChangeText([a, "left"], !0)
				}, 3E3)),
				tdTrendingNow.tdTrendingNowChangeText([a, "left"], !0))
		},
		tdTrendingNowChangeText: function(a, b) {
			for (var c = a[0], d = a[1], e = [], g = 0, k, f = 0; f < tdTrendingNow.items.length; f++) tdTrendingNow.items[f].blockUid === c && (k = f, e = tdTrendingNow.items[f].trendingNowPosts, g = tdTrendingNow.items[f].trendingNowPosition);
			if ("undefined" !== typeof k && null !== k) {
				c = g;
				f = e.length - 1;
				"left" === d ? (g += 1, g > f && (g = 0)) : (--g, 0 > g && (g = f));
				tdTrendingNow.items[k].trendingNowPosition = g;
				e[c].css("opacity", 0);
				e[c].css("z-index", 0);
				for (var p in e) !0 ===
					e.hasOwnProperty(p) && e[p].removeClass("td_animated_xlong td_fadeInLeft td_fadeInRight td_fadeOutLeft td_fadeOutRight");
				e[g].css("opacity", 1);
				e[g].css("z-index", 1);
				!0 === b ? (e[c].addClass("td_animated_xlong td_fadeOutLeft"), e[g].addClass("td_animated_xlong td_fadeInRight")) : (e[c].addClass("td_animated_xlong td_fadeOutRight"), e[g].addClass("td_animated_xlong td_fadeInLeft"))
			}
		},
		tdTrendingNowAutoStart: function(a) {
			for (var b = 0; b < tdTrendingNow.items.length; b++) tdTrendingNow.items[b].blockUid === a && "manual" !==
				tdTrendingNow.items[b].trendingNowAutostart && (tdTrendingNow.items[b].trendingNowTimer = tdTrendingNow.setTimerChangingText(a))
		},
		setTimerChangingText: function(a) {
			return setInterval(function() {
				tdTrendingNow.tdTrendingNowChangeText([a, "left"], !0)
			}, 3E3)
		}
	};
	tdTrendingNow.init()
})();
"use strict";
var td_history = {
	td_history_change_event: !1,
	init: function() {
		window.addEventListener("popstate", function(a) {
			td_history.td_history_change_event = !0;
			"undefined" != typeof a.state && null != a.state && jQuery("#" + a.state.slide_id).iosSlider("goToSlide", a.state.current_slide)
		})
	},
	replace_history_entry: function(a) {
		!1 !== tdDetect.hasHistory && history.replaceState(a, null)
	},
	add_history_entry: function(a, b, c) {
		if (!1 !== tdDetect.hasHistory)
			if ("" == c) history.pushState(a, null, null);
			else {
				var d = td_history.get_query_parameter("p");
				"" != d ? 1 == c ? history.pushState(a, null, "?p=" + d) : history.pushState(a, null, "?p=" + d + "&" + b + "=" + c) : 1 == c ? history.pushState(a, null, td_history.get_mod_rewrite_base_url()) : history.pushState(a, null, td_history.get_mod_rewrite_base_url() + c + "/")
			}
	},
	get_mod_rewrite_base_url: function() {
		var a = document.URL;
		"/" == a.charAt(a.length - 1) && (a = a.slice(0, -1));
		return !1 === td_history.get_mod_rewrite_pagination(document.URL) ? document.URL : a.substring(0, a.lastIndexOf("/")) + "/"
	},
	get_mod_rewrite_pagination: function() {
		var a = document.URL;
		"/" == a.charAt(a.length - 1) && (a = a.slice(0, -1));
		a = a.substring(a.lastIndexOf("/") + 1, a.length);
		return td_history.isInt(a) ? a : !1
	},
	get_current_page: function(a) {
		if ("" != td_history.get_query_parameter("p")) return a = td_history.get_query_parameter(a), "" != a ? a : 1;
		a = td_history.get_mod_rewrite_pagination();
		return !1 !== a ? a : 1
	},
	isInt: function(a) {
		return 0 === a % 1
	},
	get_query_parameter: function(a) {
		a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		a = (new RegExp("[\\?&]" + a + "=([^&#]*)")).exec(location.search);
		return null == a ? "" :
			decodeURIComponent(a[1].replace(/\+/g, " "))
	},
	slide_changed_callback: function(a) {
		if (!0 === td_history.td_history_change_event) td_history.td_history_change_event = !1;
		else {
			var b = a.currentSlideNumber;
			a = a.sliderContainerObject.attr("id");
			td_history.add_history_entry({
				current_slide: b,
				slide_id: a
			}, "slide", b)
		}
	}
};
window.history && window.history.pushState && td_history.init();
var tdSmartSidebar = {};
(function() {
	tdSmartSidebar = {
		hasItems: !1,
		items: [],
		scroll_window_scrollTop_last: 0,
		tds_snap_menu: tdUtil.getBackendVar("tds_snap_menu"),
		is_enabled: !0,
		is_enabled_state_run_once: !1,
		is_disabled_state_run_once: !1,
		is_tablet_grid: !1,
		_view_port_current_interval_index: tdViewport.getCurrentIntervalIndex(),
		item: function() {
			this.sidebar_jquery_obj = this.content_jquery_obj = "";
			this.content_bottom = this.content_top = this.sidebar_height = this.sidebar_bottom = this.sidebar_top = 0;
			this.sidebar_state = "";
			this.case_3_run_once = this.case_2_run_once =
				this.case_1_run_once = !1;
			this.case_3_last_content_height = this.case_3_last_sidebar_height = 0;
			this.case_4_run_once = !1;
			this.case_4_last_menu_offset = 0;
			this.case_6_run_once = this.case_5_run_once = !1
		},
		add_item: function(a) {
			tdSmartSidebar.hasItems = !0;
			a.sidebar_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');
			a.content_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');
			tdSmartSidebar.items.push(a)
		},
		td_events_scroll: function(a) {
			if (!1 !==
				tdSmartSidebar.hasItems)
				if (!1 === tdSmartSidebar.is_enabled) {
					if (!1 === tdSmartSidebar.is_disabled_state_run_once) {
						tdSmartSidebar.is_disabled_state_run_once = !0;
						for (var b = 0; b < tdSmartSidebar.items.length; b++) tdSmartSidebar.items[b].sidebar_jquery_obj.css({
							width: "auto",
							position: "static",
							top: "auto",
							bottom: "auto"
						});
						tdSmartSidebar.log("smart_sidebar_disabled")
					}
				} else window.requestAnimationFrame(function() {
					var b = 0;
					"" !== tdSmartSidebar.tds_snap_menu && (b = tdAffix._get_menu_affix_height(), "smart_snap_always" === tdAffix.tds_snap_menu &&
						(b += tdAffix.menu_offset));
					"undefined" !== typeof window.tdThemeName && "Newspaper" === window.tdThemeName && (b += 20);
					var d = "";
					a !== tdSmartSidebar.scroll_window_scrollTop_last && (d = a > tdSmartSidebar.scroll_window_scrollTop_last ? "down" : "up");
					tdSmartSidebar.scroll_window_scrollTop_last = a;
					var e = jQuery(window).height(),
						g = a + e;
					a += b;
					for (var k = 0; k < tdSmartSidebar.items.length; k++) {
						var f = tdSmartSidebar.items[k];
						f.content_top = f.content_jquery_obj.offset().top;
						f.content_height = f.content_jquery_obj.height();
						f.content_bottom =
							f.content_top + f.content_height;
						f.sidebar_top = f.sidebar_jquery_obj.offset().top;
						f.sidebar_height = f.sidebar_jquery_obj.height();
						f.sidebar_bottom = f.sidebar_top + f.sidebar_height;
						if (f.content_height <= f.sidebar_height) f.sidebar_state = "case_6_content_too_small";
						else if (f.sidebar_height < e) {
							var p = f.content_top;
							tdAffix.is_menu_affix || "undefined" === typeof window.tdThemeName || "Newsmag" !== window.tdThemeName || "smart_snap_always" !== tdAffix.tds_snap_menu || (p += b);
							tdSmartSidebar._is_smaller_or_equal(a, p) ? f.sidebar_state =
								"case_2_top_of_content" : !0 === tdSmartSidebar._is_smaller(f.sidebar_bottom, a) ? tdSmartSidebar._is_smaller(a, f.content_bottom - f.sidebar_height) ? f.sidebar_state = "case_4_fixed_up" : f.sidebar_state = "case_3_bottom_of_content" : tdSmartSidebar._is_smaller_or_equal(f.content_bottom, f.sidebar_bottom) ? "up" === d && tdSmartSidebar._is_smaller_or_equal(a, f.sidebar_top) ? f.sidebar_state = "case_4_fixed_up" : f.sidebar_state = "case_3_bottom_of_content" : f.sidebar_state = f.content_bottom - a >= f.sidebar_height ? "case_4_fixed_up" : "case_3_bottom_of_content"
						} else if (!0 ===
							tdSmartSidebar._is_smaller(f.sidebar_bottom, a) ? !0 === tdSmartSidebar._is_smaller_or_equal(a, f.sidebar_top) && !0 === tdSmartSidebar._is_smaller_or_equal(f.content_top, a) ? f.sidebar_state = "case_4_fixed_up" : !0 === tdSmartSidebar._is_smaller(f.sidebar_bottom, g) && !0 === tdSmartSidebar._is_smaller(f.sidebar_bottom, f.content_bottom) && f.content_bottom >= g ? f.sidebar_state = "case_1_fixed_down" : f.sidebar_state = "case_3_bottom_of_content" : !0 === tdSmartSidebar._is_smaller(f.sidebar_bottom, g) && !0 === tdSmartSidebar._is_smaller(f.sidebar_bottom,
								f.content_bottom) && "down" === d && f.content_bottom >= g ? f.sidebar_state = "case_1_fixed_down" : !0 === tdSmartSidebar._is_smaller_or_equal(f.sidebar_top, f.content_top) && "up" === d && f.content_bottom >= g ? f.sidebar_state = "case_2_top_of_content" : !0 === tdSmartSidebar._is_smaller_or_equal(f.content_bottom, f.sidebar_bottom) && "down" === d || f.content_bottom < g ? f.sidebar_state = "case_3_bottom_of_content" : !0 === tdSmartSidebar._is_smaller_or_equal(a, f.sidebar_top) && "up" === d && !0 === tdSmartSidebar._is_smaller_or_equal(f.content_top,
								a) ? f.sidebar_state = "case_4_fixed_up" : "up" === d && !0 === tdSmartSidebar._is_smaller_or_equal(g, f.sidebar_top) && (f.sidebar_state = "case_2_top_of_content"), "case_1_fixed_down" === f.sidebar_state && "up" === d || "case_4_fixed_up" === f.sidebar_state && "down" === d) f.sidebar_state = "case_5_absolute";
						var p = 0,
							x = tdViewport.getCurrentIntervalItem();
						null !== x && (p = x.sidebarWidth);
						switch (f.sidebar_state) {
							case "case_1_fixed_down":
								if (!0 === f.case_1_run_once) break;
								tdSmartSidebar.log("sidebar_id: " + k + " " + f.sidebar_state);
								f.case_1_run_once = !0;
								f.case_2_run_once = !1;
								f.case_3_run_once = !1;
								f.case_4_run_once = !1;
								f.case_5_run_once = !1;
								f.case_6_run_once = !1;
								f.sidebar_jquery_obj.css({
									width: p,
									position: "fixed",
									top: "auto",
									bottom: "0",
									"z-index": "1"
								});
								break;
							case "case_2_top_of_content":
								if (!0 === f.case_2_run_once) break;
								tdSmartSidebar.log("sidebar_id: " + k + " " + f.sidebar_state);
								f.case_1_run_once = !1;
								f.case_2_run_once = !0;
								f.case_3_run_once = !1;
								f.case_4_run_once = !1;
								f.case_5_run_once = !1;
								f.case_6_run_once = !1;
								f.sidebar_jquery_obj.css({
									width: "auto",
									position: "static",
									top: "auto",
									bottom: "auto"
								});
								break;
							case "case_3_bottom_of_content":
								if (!0 === f.case_3_run_once && f.case_3_last_sidebar_height === f.sidebar_height && f.case_3_last_content_height === f.content_height) break;
								tdSmartSidebar.log("sidebar_id: " + k + " " + f.sidebar_state);
								f.case_1_run_once = !1;
								f.case_2_run_once = !1;
								f.case_3_run_once = !0;
								f.case_3_last_sidebar_height = f.sidebar_height;
								f.case_3_last_content_height = f.content_height;
								f.case_4_run_once = !1;
								f.case_5_run_once = !1;
								f.case_6_run_once = !1;
								f.sidebar_jquery_obj.css({
									width: p,
									position: "absolute",
									top: f.content_bottom - f.sidebar_height - f.content_top,
									bottom: "auto"
								});
								break;
							case "case_4_fixed_up":
								if (!0 === f.case_4_run_once && f.case_4_last_menu_offset === b) break;
								tdSmartSidebar.log("sidebar_id: " + k + " " + f.sidebar_state);
								f.case_1_run_once = !1;
								f.case_2_run_once = !1;
								f.case_3_run_once = !1;
								f.case_4_run_once = !0;
								f.case_4_last_menu_offset = b;
								f.case_5_run_once = !1;
								f.case_6_run_once = !1;
								f.sidebar_jquery_obj.css({
									width: p,
									position: "fixed",
									top: b,
									bottom: "auto"
								});
								break;
							case "case_5_absolute":
								if (!0 ===
									f.case_5_run_once) break;
								tdSmartSidebar.log("sidebar_id: " + k + " " + f.sidebar_state);
								f.case_1_run_once = !1;
								f.case_2_run_once = !1;
								f.case_3_run_once = !1;
								f.case_4_run_once = !1;
								f.case_5_run_once = !0;
								f.case_6_run_once = !1;
								f.sidebar_jquery_obj.css({
									width: p,
									position: "absolute",
									top: f.sidebar_top - f.content_top,
									bottom: "auto"
								});
								break;
							case "case_6_content_too_small":
								!0 !== f.case_6_run_once && (tdSmartSidebar.log("sidebar_id: " + k + " " + f.sidebar_state), f.case_1_run_once = !1, f.case_2_run_once = !1, f.case_3_run_once = !1, f.case_4_run_once = !1, f.case_5_run_once = !1, f.case_6_run_once = !0, f.sidebar_jquery_obj.css({
									width: "auto",
									position: "static",
									top: "auto",
									bottom: "auto"
								}))
						}
					}
				})
		},
		compute: function() {
			tdSmartSidebar.td_events_scroll(jQuery(window).scrollTop())
		},
		reset_run_once_flags: function() {
			for (var a = 0; a < tdSmartSidebar.items.length; a++) tdSmartSidebar.items[a].case_1_run_once = !1, tdSmartSidebar.items[a].case_2_run_once = !1, tdSmartSidebar.items[a].case_3_run_once = !1, tdSmartSidebar.items[a].case_3_last_sidebar_height = 0, tdSmartSidebar.items[a].case_3_last_content_height =
				0, tdSmartSidebar.items[a].case_4_run_once = !1, tdSmartSidebar.items[a].case_4_last_menu_offset = 0, tdSmartSidebar.items[a].case_5_run_once = !1, tdSmartSidebar.items[a].case_6_run_once = !1
		},
		td_events_resize: function() {
			tdSmartSidebar._view_port_current_interval_index = tdViewport.getCurrentIntervalIndex();
			switch (tdSmartSidebar._view_port_current_interval_index) {
				case 0:
					tdSmartSidebar.is_enabled = !1;
					tdSmartSidebar.is_enabled_state_run_once = !1;
					break;
				case 1:
					!1 === tdSmartSidebar.is_tablet_grid && (tdSmartSidebar.reset_run_once_flags(),
						tdSmartSidebar.is_tablet_grid = !0, tdSmartSidebar.is_desktop_grid = !1, tdSmartSidebar.log("view port tablet"));
					tdSmartSidebar.is_enabled = !0;
					tdSmartSidebar.is_disabled_state_run_once = !1;
					!1 === tdSmartSidebar.is_enabled_state_run_once && (tdSmartSidebar.is_enabled_state_run_once = !0, tdSmartSidebar.log("smart_sidebar_enabled"));
					break;
				case 2:
				case 3:
					!0 === tdSmartSidebar.is_tablet_grid && (tdSmartSidebar.reset_run_once_flags(), tdSmartSidebar.is_tablet_grid = !1, tdSmartSidebar.is_desktop_grid = !0, tdSmartSidebar.log("view port desktop")),
						tdSmartSidebar.is_enabled = !0, tdSmartSidebar.is_disabled_state_run_once = !1, !1 === tdSmartSidebar.is_enabled_state_run_once && (tdSmartSidebar.is_enabled_state_run_once = !0, tdSmartSidebar.log("smart_sidebar_enabled"))
			}
			tdSmartSidebar.compute()
		},
		log: function(a) {},
		_is_smaller_or_equal: function(a, b) {
			return 1 <= Math.abs(a - b) ? a < b ? !0 : !1 : !0
		},
		_is_smaller: function(a, b) {
			return 1 <= Math.abs(a - b) ? a < b ? !0 : !1 : !1
		}
	}
})();
var tdInfiniteLoader = {};
(function() {
	tdInfiniteLoader = {
		hasItems: !1,
		items: [],
		item: function() {
			this.jqueryObj = this.uid = "";
			this.bottomTop = 0;
			this.isVisibleCallbackEnabled = !0;
			this.isVisibleCallback = function() {}
		},
		addItem: function(a) {
			tdInfiniteLoader.hasItems = !0;
			tdInfiniteLoader.items.push(a)
		},
		computeTopDistances: function() {
			!1 !== tdInfiniteLoader.hasItems && (jQuery.each(tdInfiniteLoader.items, function(a, b) {
					var c = tdInfiniteLoader.items[a].jqueryObj.offset().top;
					tdInfiniteLoader.items[a].bottomTop = c + tdInfiniteLoader.items[a].jqueryObj.height()
				}),
				tdInfiniteLoader.computeEvents())
		},
		computeEvents: function() {
			if (!1 !== tdInfiniteLoader.hasItems) {
				var a = jQuery(window).height() + jQuery(window).scrollTop();
				jQuery.each(tdInfiniteLoader.items, function(b, c) {
					tdInfiniteLoader.items[b].bottomTop < a + 700 && !0 === tdInfiniteLoader.items[b].isVisibleCallbackEnabled && (tdInfiniteLoader.items[b].isVisibleCallbackEnabled = !1, tdInfiniteLoader.items[b].isVisibleCallback())
				})
			}
		},
		enable_is_visible_callback: function(a) {
			jQuery.each(tdInfiniteLoader.items, function(b, c) {
				if (c.uid ===
					a) return tdInfiniteLoader.items[b].isVisibleCallbackEnabled = !0, !1
			})
		}
	};
	jQuery(".td_ajax_infinite").each(function() {
		var a = new tdInfiniteLoader.item;
		a.jqueryObj = jQuery(this);
		a.uid = jQuery(this).data("td_block_id");
		a.isVisibleCallback = function() {
			var b = tdBlocks.tdGetBlockObjById(a.jqueryObj.data("td_block_id"));
			"" === b.ajax_pagination_infinite_stop || b.td_current_page < parseInt(b.ajax_pagination_infinite_stop) + 1 ? (b.td_current_page++, tdBlocks.tdAjaxDoBlockRequest(b, "infinite_load")) : b.td_current_page < b.max_num_pages &&
				setTimeout(function() {
					jQuery("#infinite-lm-" + b.id).css("display", "block").css("visibility", "visible")
				}, 400)
		};
		tdInfiniteLoader.addItem(a)
	});
	jQuery(window).load(function() {
		tdInfiniteLoader.computeTopDistances()
	});
	jQuery().ready(function() {
		tdInfiniteLoader.computeTopDistances()
	})
})();
"use strict";
var Froogaloop = function() {
		function a(b) {
			return new a.fn.init(b)
		}

		function b(a, b, c) {
			if (!c.contentWindow.postMessage) return !1;
			var d = c.getAttribute("src").split("?")[0];
			a = JSON.stringify({
				method: a,
				value: b
			});
			"//" === d.substr(0, 2) && (d = window.location.protocol + d);
			c.contentWindow.postMessage(a, d)
		}

		function c(a) {
			var b, c;
			try {
				b = JSON.parse(a.data), c = b.event || b.method
			} catch (d) {}
			"ready" == c && !g && (g = !0);
			if (a.origin != k) return !1;
			a = b.value;
			var z = b.data,
				t = "" === t ? null : b.player_id;
			b = t ? e[t][c] : e[c];
			c = [];
			if (!b) return !1;
			void 0 !==
				a && c.push(a);
			z && c.push(z);
			t && c.push(t);
			return 0 < c.length ? b.apply(null, c) : b.call()
		}

		function d(a, b, c) {
			c ? (e[c] || (e[c] = {}), e[c][a] = b) : e[a] = b
		}
		var e = {},
			g = !1,
			k = "";
		a.fn = a.prototype = {
			element: null,
			init: function(a) {
				"string" === typeof a && (a = document.getElementById(a));
				this.element = a;
				a = this.element.getAttribute("src");
				"//" === a.substr(0, 2) && (a = window.location.protocol + a);
				a = a.split("/");
				for (var b = "", c = 0, d = a.length; c < d; c++) {
					if (3 > c) b += a[c];
					else break;
					2 > c && (b += "/")
				}
				k = b;
				return this
			},
			api: function(a, c) {
				if (!this.element ||
					!a) return !1;
				var e = this.element,
					g = "" !== e.id ? e.id : null,
					k = c && c.constructor && c.call && c.apply ? null : c,
					q = c && c.constructor && c.call && c.apply ? c : null;
				q && d(a, q, g);
				b(a, k, e);
				return this
			},
			addEvent: function(a, c) {
				if (!this.element) return !1;
				var e = this.element,
					k = "" !== e.id ? e.id : null;
				d(a, c, k);
				"ready" != a ? b("addEventListener", a, e) : "ready" == a && g && c.call(null, k);
				return this
			},
			removeEvent: function(a) {
				if (!this.element) return !1;
				var c = this.element,
					d;
				a: {
					if ((d = "" !== c.id ? c.id : null) && e[d]) {
						if (!e[d][a]) {
							d = !1;
							break a
						}
						e[d][a] = null
					} else {
						if (!e[a]) {
							d = !1;
							break a
						}
						e[a] = null
					}
					d = !0
				}
				"ready" != a && d && b("removeEventListener", a, c)
			}
		};
		a.fn.init.prototype = a.fn;
		window.addEventListener ? window.addEventListener("message", c, !1) : window.attachEvent("onmessage", c);
		return window.Froogaloop = window.$f = a
	}(),
	tdCustomEvents = {};
(function() {
	tdCustomEvents = {
		_callback_scroll: function() {
			tdAnimationScroll.compute_all_items()
		},
		_callback_resize: function() {},
		_lazy_callback_scroll_100: function() {
			!0 === tdAnimationStack.activated && tdAnimationStack.td_events_scroll()
		},
		_lazy_callback_scroll_500: function() {},
		_lazy_callback_resize_100: function() {
			tdPullDown.td_events_resize();
			tdBackstr.td_events_resize();
			tdAnimationScroll.td_events_resize()
		},
		_lazy_callback_resize_500: function() {
			!0 === tdAnimationStack.activated && tdAnimationStack.td_events_resize();
			for (var a = 0; a < td_backstretch_items.length; a++) tdAnimationScroll.reinitialize_item(td_backstretch_items[a], !0), td_compute_backstretch_item(td_backstretch_items[a]);
			tdAnimationScroll.compute_all_items();
			setMenuMinHeight()
		}
	}
})();
var tdEvents = {};
(function() {
	tdEvents = {
		scroll_event_slow_run: !1,
		scroll_event_medium_run: !1,
		resize_event_slow_run: !1,
		resize_event_medium_run: !1,
		scroll_window_scrollTop: 0,
		window_pageYOffset: window.pageYOffset,
		window_innerHeight: window.innerHeight,
		window_innerWidth: window.innerWidth,
		init: function() {
			jQuery(window).scroll(function() {
				tdEvents.scroll_event_slow_run = !0;
				tdEvents.scroll_event_medium_run = !0;
				tdEvents.scroll_window_scrollTop = jQuery(window).scrollTop();
				tdEvents.window_pageYOffset = window.pageYOffset;
				tdAffix.td_events_scroll(tdEvents.scroll_window_scrollTop);
				tdSmartSidebar.td_events_scroll(tdEvents.scroll_window_scrollTop);
				tdCustomEvents._callback_scroll()
			});
			jQuery(window).resize(function() {
				tdEvents.resize_event_slow_run = !0;
				tdEvents.resize_event_medium_run = !0;
				tdEvents.window_innerHeight = window.innerHeight;
				tdEvents.window_innerWidth = window.innerWidth;
				tdCustomEvents._callback_resize()
			});
			setInterval(function() {
				tdViewport.detectChanges();
				tdEvents.scroll_event_medium_run && (tdEvents.scroll_event_medium_run = !1, tdInfiniteLoader.computeEvents(), tdCustomEvents._lazy_callback_scroll_100());
				tdEvents.resize_event_medium_run && (tdEvents.resize_event_medium_run = !1, tdSmartSidebar.td_events_resize(), tdCustomEvents._lazy_callback_resize_100())
			}, 100);
			setInterval(function() {
				tdEvents.scroll_event_slow_run && (tdEvents.scroll_event_slow_run = !1, td_events_scroll_scroll_to_top(tdEvents.scroll_window_scrollTop), td_more_articles_box.td_events_scroll(tdEvents.scroll_window_scrollTop), tdCustomEvents._lazy_callback_scroll_500());
				tdEvents.resize_event_slow_run && (tdEvents.resize_event_slow_run = !1, tdAffix.compute_wrapper(),
					tdAffix.compute_top(), tdDetect.runIsPhoneScreen(), tdCustomEvents._lazy_callback_resize_500())
			}, 500)
		}
	};
	tdEvents.init()
})();
var tdAjaxCount = {};
(function() {
	tdAjaxCount = {
		tdGetViewsCountsAjax: function(a, b) {
			var c = "td_ajax_get_views";
			"post" === a && (c = "td_ajax_update_views");
			jQuery.ajax({
				type: "POST",
				url: td_ajax_url,
				cache: !0,
				data: {
					action: c,
					td_post_ids: b
				},
				success: function(a, b, c) {
					a = jQuery.parseJSON(a);
					a instanceof Object && jQuery.each(a, function(a, b) {
						jQuery(".td-nr-views-" + a).html(b)
					})
				},
				error: function(a, b, c) {}
			})
		}
	}
})();
var tdYoutubePlayers = {},
	tdVimeoPlayers = {};
jQuery().ready(function() {
	tdYoutubePlayers.init();
	tdVimeoPlayers.init()
});
(function() {
	tdYoutubePlayers = {
		tdPlayerContainer: "player_youtube",
		players: [],
		init: function() {
			for (var a = jQuery(".td_wrapper_playlist_player_youtube"), b = 0; b < a.length; b++) {
				var c = jQuery(a[b]),
					d = tdYoutubePlayers.addPlayer(c),
					e = d.tdPlayerContainer;
				c.parent().find(".td_youtube_control").data("player-id", e);
				for (var g = c.parent().find(".td_click_video_youtube"), k = 0; k < g.length; k++) jQuery(g[k]).data("player-id", e), k + 1 < g.length ? jQuery(g[k]).data("next-video-id", jQuery(g[k + 1]).data("video-id")) : jQuery(g[k]).data("next-video-id",
					jQuery(g[0]).data("video-id"));
				"1" == c.data("autoplay") && (d.autoplay = 1);
				c = c.data("first-video");
				"" !== c && (d.tdPlaylistIdYoutubeVideoRunning = c, d.playVideo(c))
			}
			jQuery(".td_click_video_youtube").click(function() {
				var a = jQuery(this).data("video-id"),
					b = jQuery(this).data("player-id");
				void 0 !== b && "" !== b && void 0 !== a && "" !== a && tdYoutubePlayers.operatePlayer(b, "play", a)
			});
			jQuery(".td_youtube_control").click(function() {
				var a = jQuery(this).data("player-id");
				void 0 !== a && "" !== a && (jQuery(this).hasClass("td-sp-video-play") ?
					tdYoutubePlayers.operatePlayer(a, "play") : tdYoutubePlayers.operatePlayer(a, "pause"))
			})
		},
		addPlayer: function(a) {
			a = tdYoutubePlayers.createPlayer(tdYoutubePlayers.tdPlayerContainer + "_" + tdYoutubePlayers.players.length, a);
			tdYoutubePlayers.players.push(a);
			return a
		},
		operatePlayer: function(a, b, c) {
			for (var d = 0; d < tdYoutubePlayers.players.length; d++)
				if (tdYoutubePlayers.players[d].tdPlayerContainer == a) {
					a = tdYoutubePlayers.players[d];
					a.playStatus();
					"play" === b ? (a.autoplay = 1, void 0 === c ? a.playerPlay() : a.playVideo(c)) :
						"pause" == b && tdYoutubePlayers.players[d].playerPause();
					break
				}
		},
		createPlayer: function(a, b) {
			var c = {
				tdYtPlayer: "",
				tdPlayerContainer: a,
				autoplay: 0,
				tdPlaylistIdYoutubeVideoRunning: "",
				jqTDWrapperVideoPlaylist: b.closest(".td_wrapper_video_playlist"),
				jqPlayerWrapper: b,
				jqControlPlayer: "",
				_videoId: "",
				playVideo: function(a) {
					c._videoId = a;
					"undefined" === typeof YT || "undefined" === typeof YT.Player ? (window.onYouTubePlayerAPIReady = function() {
							for (var a = 0; a < tdYoutubePlayers.players.length; a++) tdYoutubePlayers.players[a].loadPlayer()
						},
						jQuery.getScript("https://www.youtube.com/player_api").done(function(a, b) {})) : c.loadPlayer(a)
				},
				loadPlayer: function(a) {
					var b = c._videoId;
					void 0 !== a && (b = a);
					if (void 0 !== b) {
						c.tdPlaylistIdYoutubeVideoRunning = b;
						a = window.td_youtube_list_ids["td_" + c.tdPlaylistIdYoutubeVideoRunning].title;
						var g = window.td_youtube_list_ids["td_" + c.tdPlaylistIdYoutubeVideoRunning].time;
						c.jqTDWrapperVideoPlaylist.find(".td_click_video_youtube").removeClass("td_video_currently_playing");
						c.jqTDWrapperVideoPlaylist.find(".td_" + b).addClass("td_video_currently_playing");
						c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_title_youtube").html(a);
						c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_time_youtube").html(g);
						c.jqPlayerWrapper.html("<div id=" + c.tdPlayerContainer + "></div>");
						c.jqControlPlayer = c.jqTDWrapperVideoPlaylist.find(".td_youtube_control");
						c.tdYtPlayer = new YT.Player(c.tdPlayerContainer, {
							playerVars: {
								autoplay: c.autoplay
							},
							height: "100%",
							width: "100%",
							videoId: b,
							events: {
								onStateChange: c.onPlayerStateChange
							}
						})
					}
				},
				onPlayerStateChange: function(a) {
					if (a.data ===
						YT.PlayerState.PLAYING) c.pauseStatus();
					else if (a.data === YT.PlayerState.ENDED) {
						c.playStatus();
						c.autoplay = 1;
						a = "";
						var b = c.jqTDWrapperVideoPlaylist.find(".td_video_currently_playing");
						b.length && (b = jQuery(b).next(".td_click_video_youtube"), b.length && (a = jQuery(b).data("video-id")));
						"" !== a && c.playVideo(a)
					} else YT.PlayerState.PAUSED && c.playStatus()
				},
				playerPlay: function() {
					c.tdYtPlayer.playVideo()
				},
				playerPause: function() {
					c.tdYtPlayer.pauseVideo()
				},
				playStatus: function() {
					c.jqControlPlayer.removeClass("td-sp-video-pause").addClass("td-sp-video-play")
				},
				pauseStatus: function() {
					c.jqControlPlayer.removeClass("td-sp-video-play").addClass("td-sp-video-pause")
				}
			};
			return c
		}
	};
	tdVimeoPlayers = {
		tdPlayerContainer: "player_vimeo",
		players: [],
		existingAutoplay: !1,
		init: function() {
			for (var a = jQuery(".td_wrapper_playlist_player_vimeo"), b = 0; b < a.length; b++) 0 !== tdVimeoPlayers.addPlayer(jQuery(a[b])).autoplay && (tdVimeoPlayers.existingAutoplay = !0);
			jQuery(".td_click_video_vimeo").click(function() {
				var a = jQuery(this).data("video-id"),
					b = jQuery(this).data("player-id");
				void 0 !==
					b && "" !== b && void 0 !== a && "" !== a && tdVimeoPlayers.operatePlayer(b, "play", a)
			});
			jQuery(".td_vimeo_control").click(function() {
				var a = jQuery(this).data("player-id");
				void 0 !== a && "" !== a && (jQuery(this).hasClass("td-sp-video-play") ? tdVimeoPlayers.operatePlayer(a, "play") : tdVimeoPlayers.operatePlayer(a, "pause"))
			})
		},
		addPlayer: function(a) {
			var b = tdVimeoPlayers.tdPlayerContainer + "_" + tdVimeoPlayers.players.length,
				c = tdVimeoPlayers.createPlayer(b, a);
			a.parent().find(".td_vimeo_control").data("player-id", b);
			for (var d = a.parent().find(".td_click_video_vimeo"),
					e = 0; e < d.length; e++) jQuery(d[e]).data("player-id", b), e + 1 < d.length ? jQuery(d[e]).data("next-video-id", jQuery(d[e + 1]).data("video-id")) : jQuery(d[e]).data("next-video-id", jQuery(d[0]).data("video-id"));
			"1" == a.data("autoplay") && (c.autoplay = 1);
			a = a.data("first-video");
			void 0 !== a && "" !== a && c.createPlayer(a);
			tdVimeoPlayers.players.push(c);
			return c
		},
		operatePlayer: function(a, b, c) {
			for (var d = 0; d < tdVimeoPlayers.players.length; d++)
				if (tdVimeoPlayers.players[d].playerId == a) {
					a = tdVimeoPlayers.players[d];
					"play" === b ? (a.autoplay =
						1, void 0 !== c ? (tdVimeoPlayers.existingAutoplay = !1, a.createPlayer(c)) : a.playerPlay()) : "pause" === b && a.playerPause();
					break
				}
		},
		createPlayer: function(a, b) {
			var c = {
				playerId: a,
				jqTDWrapperVideoPlaylist: b.closest(".td_wrapper_video_playlist"),
				jqPlayerWrapper: b,
				currentVideoPlaying: "",
				player: "",
				jqControlPlayer: "",
				autoplay: 0,
				createPlayer: function(a) {
					if ("" !== a) {
						this.currentVideoPlaying = a;
						var b = "",
							g = window.td_vimeo_list_ids["td_" + a].title,
							k = window.td_vimeo_list_ids["td_" + a].time;
						c.jqTDWrapperVideoPlaylist.find(".td_click_video_vimeo").removeClass("td_video_currently_playing");
						c.jqTDWrapperVideoPlaylist.find(".td_" + a).addClass("td_video_currently_playing");
						c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_title_vimeo").html(g);
						c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_time_vimeo").html(k);
						c.jqControlPlayer = c.jqTDWrapperVideoPlaylist.find(".td_vimeo_control");
						tdVimeoPlayers.existingAutoplay || 0 === c.autoplay ? c.playStatus() : (b = "&autoplay=1", tdDetect.isMobileDevice ? c.playStatus() : c.pauseStatus());
						c.jqPlayerWrapper.html('<iframe id="' + c.playerId + '" src="https://player.vimeo.com/video/' +
							a + "?api=1&player_id=" + c.playerId + "" + b + '"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
						c.createVimeoObjectPlayer(jQuery)
					}
				},
				createVimeoObjectPlayer: function(a) {
					var b = "";
					a = a("#" + c.playerId);
					a.length && (b = $f(a[0]), c.player = b, b.addEvent("ready", function() {
						b.addEvent("play", function(a) {
							c.pauseStatus();
							c.autoplay = 1
						});
						b.addEvent("pause", function(a) {
							c.playStatus()
						});
						b.addEvent("finish", function(a) {
							a = "";
							var b = c.jqTDWrapperVideoPlaylist.find(".td_video_currently_playing");
							b.length && (b = jQuery(b).next(".td_click_video_vimeo"), b.length && (a = jQuery(b).data("video-id")));
							"" !== a ? (c.createPlayer(a), tdDetect.isMobileDevice ? c.playStatus() : c.pauseStatus()) : c.playStatus()
						})
					}))
				},
				playerPlay: function() {
					c.autoplay = 1;
					c.player.api("play")
				},
				playerPause: function() {
					c.player.api("pause")
				},
				playStatus: function() {
					c.jqControlPlayer.removeClass("td-sp-video-pause").addClass("td-sp-video-play")
				},
				pauseStatus: function() {
					c.jqControlPlayer.removeClass("td-sp-video-play").addClass("td-sp-video-pause")
				}
			};
			return c
		}
	}
})();
"use strict";
jQuery(window).load(function() {
	td_resize_smartlist_sliders_and_update()
});
jQuery().ready(function() {
	td_resize_smartlist_sliders_and_update()
});

function td_resize_smartlist_slides(a) {
	var b = a.currentSlideNumber;
	a = jQuery(a.data.obj[0]).attr("id");
	tdDetect.isIe8 || (jQuery("#" + a).css("overflow", "none"), jQuery("#" + a + " .td-item").css("overflow", "visible"));
	b = jQuery("#" + a + "_item_" + b).outerHeight(!0);
	jQuery("#" + a + ", #" + a + " .td-slider").css({
		height: b
	})
}

function td_resize_smartlist_sliders_and_update() {
	jQuery(document).find(".td-smart-list-slider").each(function() {
		var a = jQuery(this).attr("id");
		tdDetect.isIe8 || (jQuery("#" + a).css("overflow", "none"), jQuery("#" + a + " .td-item").css("overflow", "visible"));
		var b = 0,
			b = jQuery("#" + a + "_item_" + td_history.get_current_page("slide")).outerHeight(!0);
		jQuery("#" + a + ", #" + a + " .td-slider").css({
			height: b
		});
		tdDetect.isAndroid && setTimeout(function() {
			jQuery("#" + a).iosSlider("update")
		}, 2E3)
	})
}

function td_resize_normal_slide(a) {
	a = jQuery(a.data.obj[0]).attr("id");
	var b = td_get_document_width();
	tdDetect.isIe8 || (jQuery("#" + a).css("overflow", "none"), jQuery("#" + a + " .td-item").css("overflow", "visible"));
	var c = jQuery("#" + a + "_item_0").outerWidth(!0),
		d = 780;
	tdDetect.isAndroid && (d = 1E3);
	b < d && !tdDetect.isIpad && (b = 300 < c ? .5 * c : c, jQuery("#" + a + ", #" + a + " .td-slider, #" + a + " .td-slider .td-module-thumb").css({
		height: b
	}))
}

function td_resize_normal_slide_and_update(a) {
	var b = jQuery(a.data.obj[0]).attr("id");
	a = td_get_document_width();
	tdDetect.isIe8 || (jQuery("#" + b).css("overflow", "none"), jQuery("#" + b + " .td-item").css("overflow", "visible"));
	var c = 0,
		c = jQuery("#" + b + "_item_0").outerWidth(!0),
		d = 780;
	tdDetect.isAndroid && (d = 1E3);
	a < d && !tdDetect.isIpad && (c = 300 < c ? .5 * c : c, jQuery("#" + b + ", #" + b + " .td-slider, #" + b + " .td-slider .td-module-thumb").css({
		height: c
	}), setTimeout(function() {
		jQuery("#" + b).iosSlider("update")
	}, 2E3))
}
var tdPullDown = {};
(function() {
	tdPullDown = {
		_view_port_interval_index: tdViewport.INTERVAL_INITIAL_INDEX,
		reinitialize_items_at_change_view_port: !1,
		items: [],
		item: function() {
			this.horizontal_element_css_class = this.container_jquery_obj = this.vertical_jquery_obj = this.horizontal_jquery_obj = this.blockUid = "";
			this.minimum_elements = 2;
			this.excluded_jquery_elements = [];
			this._horizontal_extra_space = 1;
			this._horizontal_elements = [];
			this._vertical_elements = [];
			this._vertical_ul_jquery_obj = "";
			this._vertical_jquery_obj_outer_width = 0;
			this._is_initialized = !1
		},
		init: function() {
			tdPullDown._view_port_interval_index = tdViewport.getCurrentIntervalIndex();
			tdPullDown.items = []
		},
		add_item: function(a) {
			if (1 !== a.vertical_jquery_obj.length) throw "item.vertical_jquery_obj is more or less than one!";
			if (1 !== a.horizontal_jquery_obj.length) throw "item.horizontal_jquery_obj is more or less than one!";
			if (1 !== a.container_jquery_obj.length) throw "item.container_jquery_obj is more or less than one!";
			if ("" === a.horizontal_element_css_class) throw "item.horizontal_element_css_class is empty";
			tdPullDown.items.push(a);
			tdPullDown._initialize_item(a);
			tdPullDown._compute_item(a)
		},
		deleteItem: function(a) {
			for (var b = 0; b < tdPullDown.items.length; b++)
				if (tdPullDown.items[b].blockUid === a) return tdPullDown.items.splice(b, 1), !0;
			return !1
		},
		_initialize_item: function(a) {
			if (!0 !== a._is_initialized)
				if (a._vertical_ul_jquery_obj = a.vertical_jquery_obj.find("ul:first"), 0 === a._vertical_ul_jquery_obj.length) tdPullDown.log("Item can' be initialized. The vertical list doesn't have an 'ul' container");
				else {
					var b = null,
						c = null;
					a.horizontal_jquery_obj.find("." + a.horizontal_element_css_class).each(function(d, g) {
						b = jQuery(g);
						b.css("-webkit-transition", "opacity 0.2s");
						b.css("-moz-transition", "opacity 0.2s");
						b.css("-o-transition", "opacity 0.2s");
						b.css("transition", "opacity 0.2s");
						b.css("opacity", "1");
						c = {
							jquery_object: b,
							calculated_width: b.outerWidth(!0)
						};
						a._horizontal_elements.push(c)
					});
					a._vertical_jquery_obj_outer_width = a.vertical_jquery_obj.outerWidth(!0);
					a.vertical_jquery_obj.css("display", "none");
					var d = a.horizontal_jquery_obj.css("padding-left");
					void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
					d = a.horizontal_jquery_obj.css("padding-right");
					void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
					d = a.horizontal_jquery_obj.css("margin-left");
					void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
					d = a.horizontal_jquery_obj.css("margin-right");
					void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
					d = a.horizontal_jquery_obj.css("border-left");
					void 0 !==
						d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
					d = a.horizontal_jquery_obj.css("border-right");
					void 0 !== d && "" !== d && (a._horizontal_extra_space += parseInt(d.replace("px", "")));
					a._is_initialized = !0
				}
		},
		_get_horizontal_elements_width: function(a) {
			for (var b = 0, c = a._horizontal_elements.length - 1; 0 <= c; c--) b += a._horizontal_elements[c].calculated_width;
			return b
		},
		_reinitialize_all_items: function() {
			for (var a = tdPullDown.items.length - 1; 0 <= a; a--) tdPullDown._reinitialize_item(tdPullDown.items[a])
		},
		_reinitialize_item: function(a) {
			!1 !== a._is_initialized && (a._is_initialized = !1, a.horizontal_jquery_obj.html(a.horizontal_jquery_obj.html() + a._vertical_ul_jquery_obj.html()), a._vertical_ul_jquery_obj.html(""), a._horizontal_elements = [], a._vertical_elements = [], a._horizontal_extra_space = 1, tdPullDown._initialize_item(a))
		},
		_compute_item: function(a) {
			if (!1 !== a._is_initialized) {
				tdPullDown._prepare_horizontal_header(a, !0);
				var b = 0,
					c = a.container_jquery_obj.css("width");
				if (void 0 !== c && "" !== c)
					for (b = c.replace("px",
							""), c = a.excluded_jquery_elements.length - 1; 0 <= c; c--) b -= a.excluded_jquery_elements[c].contents().outerWidth(!0);
				0 < a._vertical_elements.length && (b -= a._vertical_jquery_obj_outer_width);
				for (var b = b - tdPullDown._get_horizontal_elements_width(a), b = b - a._horizontal_extra_space, d; 0 > b;) {
					if (0 !== a.minimum_elements && a._horizontal_elements.length <= a.minimum_elements) {
						tdPullDown._make_all_elements_vertical(a);
						tdPullDown._prepare_horizontal_header(a);
						return
					}
					0 === a._vertical_elements.length && (b -= a._vertical_jquery_obj_outer_width);
					d = tdPullDown._make_element_vertical(a);
					b += d.calculated_width
				}
				if (0 !== a.minimum_elements && 0 === a._horizontal_elements.length && 0 < a._vertical_elements.length && b >= a._vertical_elements[0].calculated_width) {
					for (d = c = 0; d < a.minimum_elements && d < a._vertical_elements.length; d++) c += a._vertical_elements[d].calculated_width;
					for (var e = 0, g = a.minimum_elements; 0 < g && 0 < a._vertical_elements.length && b >= c;)
						if (d = tdPullDown._make_element_horizontal(a), null !== d) e += d.calculated_width, g--;
						else {
							tdPullDown._prepare_horizontal_header(a);
							return
						}
					b -= e
				}
				for (;
					(0 < a._horizontal_elements.length || 0 === a._horizontal_elements.length && 0 === a.minimum_elements) && 0 < a._vertical_elements.length && b >= a._vertical_elements[0].calculated_width;)
					if (d = tdPullDown._make_element_horizontal(a), null !== d) b -= d.calculated_width;
					else {
						tdPullDown._prepare_horizontal_header(a);
						return
					}
				1 === a._vertical_elements.length && b + a._vertical_jquery_obj_outer_width >= a._vertical_elements[0].calculated_width && tdPullDown._make_element_horizontal(a);
				tdPullDown._prepare_horizontal_header(a)
			}
		},
		_prepare_horizontal_header: function(a, b) {
			var c = a.horizontal_jquery_obj.parent().siblings(".block-title:first");
			1 === c.length && (c = c.find("span:first"), 1 === c.length && ("undefined" !== typeof b && !0 === b ? c.css("margin-right", 0) : 0 === a._horizontal_elements.length ? c.css("margin-right", a._vertical_jquery_obj_outer_width + "px") : c.css("margin-right", 0)))
		},
		_compute_all_items: function() {
			for (var a = tdPullDown.items.length - 1; 0 <= a; a--) tdPullDown.items[a].constructor === tdPullDown.item && tdPullDown._compute_item(tdPullDown.items[a])
		},
		_make_element_horizontal: function(a) {
			if (!1 === a._is_initialized || 0 === a._vertical_elements.length) return null;
			var b = a._vertical_elements.shift();
			0 === a._vertical_elements.length && a.vertical_jquery_obj.css("display", "none");
			a._horizontal_elements.push(b);
			b.jquery_object.css("opacity", "0");
			b.jquery_object.detach().appendTo(a.horizontal_jquery_obj);
			setTimeout(function() {
				b.jquery_object.css("opacity", "1")
			}, 50);
			return b
		},
		_make_element_vertical: function(a) {
			if (!1 === a._is_initialized || 0 === a._horizontal_elements.length) return null;
			var b = a._horizontal_elements.pop();
			0 === a._vertical_elements.length && a.vertical_jquery_obj.css("display", "");
			a._vertical_elements.unshift(b);
			b.jquery_object.detach().prependTo(a._vertical_ul_jquery_obj);
			return b
		},
		_make_all_elements_vertical: function(a) {
			for (; 0 < a._horizontal_elements.length;) tdPullDown._make_element_vertical(a)
		},
		td_events_resize: function() {
			0 !== tdPullDown.items.length && (!0 === tdPullDown.reinitialize_items_at_change_view_port && tdPullDown._view_port_interval_index !== tdViewport.getCurrentIntervalIndex() &&
				tdPullDown._reinitialize_all_items(), tdPullDown._compute_all_items())
		},
		log: function(a) {}
	};
	tdPullDown.init()
})();
var tdAnimationScroll = {};
(function() {
	tdAnimationScroll = {
		items: [],
		rAFIndex: 0,
		animation_running: !1,
		item: function() {
			this.percent_value = 0;
			this.animation_callback = null;
			this.jqueryObj = "";
			this.wrapper_jquery_obj = void 0;
			this.top_marker_jquery_obj = "";
			this.full_height = 0;
			this.offset_bottom_top = this.offset_top = "";
			this.properties = {};
			this.computed_item_properties = {};
			this.computation_stopped = this._is_initialized = this.top_is_out = this.redraw = !1;
			this.add_item_property = function(a, b, c, d, e, g) {
				if (!(b >= c))
					if (void 0 === this.properties[a]) this.properties[a] = {
						computed_value: "",
						settings: []
					}, 0 !== b && (this.properties[a].settings[this.properties[a].settings.length] = {
						start_percent: 0,
						end_percent: b,
						start_value: d,
						end_value: d,
						easing: ""
					}), this.properties[a].settings[this.properties[a].settings.length] = {
						start_percent: b,
						end_percent: c,
						start_value: d,
						end_value: e,
						easing: g
					}, this.properties[a].settings[this.properties[a].settings.length] = {
						start_percent: c,
						end_percent: 100,
						start_value: e,
						end_value: e,
						easing: ""
					};
					else {
						var k = this.properties[a].settings[this.properties[a].settings.length -
							1];
						k.start_percent !== b ? (this.properties[a].settings[this.properties[a].settings.length - 1] = {
							start_percent: k.start_percent,
							end_percent: b,
							start_value: k.end_value,
							end_value: k.end_value,
							easing: ""
						}, this.properties[a].settings[this.properties[a].settings.length] = {
							start_percent: b,
							end_percent: c,
							start_value: d,
							end_value: e,
							easing: g
						}) : this.properties[a].settings[this.properties[a].settings.length - 1] = {
							start_percent: b,
							end_percent: c,
							start_value: d,
							end_value: e,
							easing: g
						};
						100 !== c && (this.properties[a].settings[this.properties[a].settings.length] = {
							start_percent: c,
							end_percent: 100,
							start_value: e,
							end_value: e,
							easing: ""
						})
					}
			};
			this.remove_item_property = function(a) {
				if (void 0 === this.properties[a]) return !1;
				delete this.properties[a];
				return !0
			}
		},
		init: function() {
			tdAnimationScroll.items = []
		},
		add_item: function(a) {
			a.constructor === tdAnimationScroll.item && (tdAnimationScroll.items.push(a), tdAnimationScroll._initialize_item(a))
		},
		_initialize_item: function(a) {
			if (!0 !== a._is_initialized && (a.full_height = void 0 === a.wrapper_jquery_obj ? a.jqueryObj.outerHeight(!0) : a.wrapper_jquery_obj.height(),
					0 !== a.full_height)) {
				var b = jQuery('<div class="td_marker_animation" style="height: 0; width: 0">');
				b.insertBefore(a.jqueryObj);
				a.top_marker_jquery_obj = b;
				a.offset_top = a.top_marker_jquery_obj.offset().top;
				a.offset_bottom_top = a.offset_top + a.full_height;
				a.top_is_out = tdEvents.window_pageYOffset > a.offset_top;
				a._is_initialized = !0
			}
		},
		reinitialize_all_items: function(a) {
			for (var b = tdAnimationScroll.items.length - 1; 0 <= b; b--) tdAnimationScroll.reinitialize_item(tdAnimationScroll.items[b], a)
		},
		reinitialize_item: function(a,
			b) {
			if (!1 !== a._is_initialized) {
				a._is_initialized = !1;
				a.offset_top = a.top_marker_jquery_obj.offset().top;
				if (!0 === b && (a.full_height = void 0 === a.wrapper_jquery_obj ? a.jqueryObj.outerHeight(!0) : a.wrapper_jquery_obj.height(), 0 === a.full_height)) return;
				a.offset_bottom_top = a.offset_top + a.full_height;
				a._is_initialized = !0
			}
		},
		_compute_item_properties: function(a) {
			var b = {},
				c, d;
			for (d in a.properties)
				if (!0 === a.properties.hasOwnProperty(d)) {
					c = a.properties[d];
					var e, g, k;
					for (g = 0; g < c.settings.length; g++)
						if (e = c.settings[g],
							e.start_percent <= a.percent_value && a.percent_value < e.end_percent || a.percent_value === e.end_percent && 100 === a.percent_value) {
							e.start_value === e.end_value ? e = e.start_value : (g = (a.percent_value - e.start_percent) / (e.end_percent - e.start_percent) * (e.end_value - e.start_value), void 0 === e.easing || "" === e.easing ? e = e.start_value + g : (k = Math.abs(e.start_value - e.end_value) / 1E3, e = e.start_value < e.end_value ? e.start_value + 1E3 * jQuery.easing[e.easing](null, g, 0, k, e.end_value - e.start_value) : e.start_value - 1E3 * jQuery.easing[e.easing](null, -g, 0, k, e.start_value - e.end_value)));
							c.computed_value !== e && (c.computed_value = e, b[d] = e, a.redraw = !0);
							break
						}
				}
			a.computed_item_properties = b
		},
		compute_item: function(a) {
			if (!1 !== a._is_initialized) {
				var b = 0;
				tdEvents.window_pageYOffset + tdEvents.window_innerHeight >= a.offset_top && (b = tdEvents.window_pageYOffset > a.offset_bottom_top ? 100 : 100 * (tdEvents.window_pageYOffset + tdEvents.window_innerHeight - a.offset_top) / (tdEvents.window_innerHeight + a.full_height));
				a.percent_value !== b && (a.percent_value = b, tdAnimationScroll._compute_item_properties(a));
				a.top_is_out = tdEvents.window_pageYOffset > a.offset_top
			}
		},
		compute_all_items: function() {
			!1 === tdAnimationScroll.animation_running && (tdAnimationScroll.rAFIndex = window.requestAnimationFrame(tdAnimationScroll._animate_all_items));
			tdAnimationScroll.animation_running = !0
		},
		_animate_all_items: function() {
			for (var a = 0; a < tdAnimationScroll.items.length; a++) !1 === tdAnimationScroll.items[a].computation_stopped && tdAnimationScroll.compute_item(tdAnimationScroll.items[a]);
			for (a = 0; a < tdAnimationScroll.items.length; a++) !0 ===
				tdAnimationScroll.items[a].redraw && tdAnimationScroll.items[a].animation_callback();
			tdAnimationScroll.animation_running = !1
		},
		td_events_resize: function() {
			0 !== tdAnimationScroll.items.length && (tdAnimationScroll.reinitialize_all_items(!1), tdAnimationScroll.compute_all_items())
		},
		log: function(a) {}
	};
	tdAnimationScroll.init()
})();
var tdBackstr = {};
(function() {
	tdBackstr = {
		items: [],
		item: function() {
			this.blockUid = "";
			this.image_aspect_rate = this.previous_value = 0;
			this.image_jquery_obj = this.wrapper_image_jquery_obj = ""
		},
		add_item: function(a) {
			if (a.constructor === tdBackstr.item)
				if (a.image_jquery_obj.get(0).complete) tdBackstr._load_item_image(a);
				else a.image_jquery_obj.on("load", function() {
					tdBackstr._load_item_image(a)
				})
		},
		deleteItem: function(a) {
			for (var b = 0; b < tdBackstr.items.length; b++)
				if (tdBackstr.items[b].blockUid === a) return tdBackstr.items.splice(b, 1), !0;
			return !1
		},
		_load_item_image: function(a) {
			a.image_aspect_rate = a.image_jquery_obj.width() / a.image_jquery_obj.height();
			tdBackstr.items.push(a);
			tdBackstr._compute_item(a);
			a.image_jquery_obj.css("opacity", "1")
		},
		_compute_item: function(a) {
			var b;
			a.wrapper_image_jquery_obj.width() / a.wrapper_image_jquery_obj.height() < a.image_aspect_rate ? (b = 1, a.previous_value !== b && (a.image_jquery_obj.removeClass("td-stretch-width"), a.image_jquery_obj.addClass("td-stretch-height"), a.previous_value = b)) : (b = 2, a.previous_value !==
				b && (a.image_jquery_obj.removeClass("td-stretch-height"), a.image_jquery_obj.addClass("td-stretch-width"), a.previous_value = b))
		},
		_compute_all_items: function() {
			for (var a = 0; a < tdBackstr.items.length; a++) tdBackstr._compute_item(tdBackstr.items[a])
		},
		td_events_resize: function() {
			0 !== tdBackstr.items.length && tdBackstr._compute_all_items()
		},
		log: function(a) {
			window.console.log(a)
		}
	}
})();
var tdAnimationStack = {};
(function() {
	tdAnimationStack = {
		_animation_css_class1: "",
		_animation_css_class2: "",
		_animation_default_effect: "type0",
		activated: !1,
		_ready_for_initialization: !0,
		_ready_init_timeout: void 0,
		max_waiting_for_init: 3E3,
		_specific_selectors: "",
		_general_selectors: "",
		ready_init: function() {
			tdDetect.isIe8 || tdDetect.isIe9 || 0 < jQuery(".vc_images_carousel").length ? (tdAnimationStack._ready_for_initialization = !1, void 0 !== window.td_animation_stack_effect && ("" === window.td_animation_stack_effect && (window.td_animation_stack_effect =
				tdAnimationStack._animation_default_effect), jQuery("body").removeClass("td-animation-stack-" + window.td_animation_stack_effect))) : void 0 === window.tds_animation_stack || void 0 === window.td_animation_stack_effect ? tdAnimationStack._ready_for_initialization = !1 : (void 0 !== window.td_animation_stack_specific_selectors && (tdAnimationStack._specific_selectors = window.td_animation_stack_specific_selectors), "" === window.td_animation_stack_effect && (window.td_animation_stack_effect = tdAnimationStack._animation_default_effect),
				tdAnimationStack._animation_css_class1 = "td-animation-stack-" + window.td_animation_stack_effect + "-1", tdAnimationStack._animation_css_class2 = "td-animation-stack-" + window.td_animation_stack_effect + "-2", void 0 !== window.td_animation_stack_general_selectors && (tdAnimationStack._general_selectors = window.td_animation_stack_general_selectors), jQuery(tdAnimationStack._general_selectors).addClass(tdAnimationStack._animation_css_class1), tdAnimationStack._ready_init_timeout = setTimeout(function() {
					!0 !== tdAnimationStack.activated &&
						(tdAnimationStack._ready_for_initialization = !1, void 0 !== window.td_animation_stack_effect && jQuery("body").removeClass("td-animation-stack-" + window.td_animation_stack_effect))
				}, tdAnimationStack.max_waiting_for_init))
		},
		_ITEM_TO_VIEW_PORT: {
			ITEM_ABOVE_VIEW_PORT: 0,
			ITEM_IN_VIEW_PORT: 1,
			ITEM_UNDER_VIEW_PORT: 2
		},
		SORTED_METHOD: {
			sort_left_to_right: function(a, b) {
				return a.offset_top > b.offset_top ? 1 : a.offset_top < b.offset_top ? -1 : a._order > b._order ? 1 : a._order < b._order ? -1 : 0
			},
			sort_right_to_left: function(a, b) {
				return a.offset_top >
					b.offset_top || !(a.offset_top < b.offset_top || a._order > b._order) && a._order < b._order ? 1 : -1
			}
		},
		_order: 0,
		interval: 70,
		min_interval: 17,
		max_interval: 40,
		_current_interval: void 0,
		_items_in_view_port: [],
		_items_above_view_port: [],
		items: [],
		item: function() {
			this._order = this.jqueryObj = this.offset_bottom_to_top = this.offset_top = void 0
		},
		_initialize_item: function(a) {
			a._order = tdAnimationStack._order++;
			a.offset_top = a.jqueryObj.offset().top;
			a.offset_bottom_to_top = a.offset_top + a.jqueryObj.height()
		},
		check_for_new_items: function(a,
			b, c) {
			if (!1 !== tdAnimationStack.activated && !1 !== tdAnimationStack._ready_for_initialization) {
				void 0 === a && (a = "");
				var d = [];
				jQuery(tdAnimationStack._general_selectors).not("." + tdAnimationStack._animation_css_class2).addClass(tdAnimationStack._animation_css_class1);
				var e = jQuery(a + ", .post").find(tdAnimationStack._specific_selectors).filter(function() {
					return jQuery(this).hasClass(tdAnimationStack._animation_css_class1)
				});
				e.each(function(a, b) {
					var c = new tdAnimationStack.item;
					c.jqueryObj = jQuery(b);
					tdAnimationStack.log(a);
					tdAnimationStack._initialize_item(c);
					d.push(c)
				});
				(function() {
					for (var a = !0, k = 0; k < d.length; k++)
						if (!1 === e[k].complete) {
							a = !1;
							break
						}
					if (!1 === a) {
						var f = (new Date).getTime();
						tdAnimationStack.log("TIMER - started");
						var p = setInterval(function() {
							var k;
							if ((new Date).getTime() - f > tdAnimationStack.max_waiting_for_init)
								for (clearInterval(p), k = 0; k < d.length; k++) d[k].jqueryObj.removeClass(tdAnimationStack._animation_css_class1), d[k].jqueryObj.addClass(tdAnimationStack._animation_css_class2);
							else {
								a = !0;
								for (k = 0; k < d.length; k++)
									if (!1 ===
										e[k].complete) {
										a = !1;
										break
									}!0 === a && (clearInterval(p), tdAnimationStack.log("TIMER - stopped"), tdAnimationStack._precompute_items(d, b, c), tdAnimationStack.compute_items())
							}
						}, 100)
					} else tdAnimationStack._precompute_items(d, b, c), tdAnimationStack.compute_items()
				})();
				tdAnimationStack.log("checked for new items finished")
			}
		},
		_precompute_items: function(a, b, c) {
			a.sort(b);
			if (!0 === c)
				for (; 0 < a.length;) tdAnimationStack.log("add item 1 : " + a.length), tdAnimationStack._items_in_view_port.push(a.shift());
			else
				for (; 0 < a.length;) tdAnimationStack.log("add item 2 : " +
					a.length), tdAnimationStack.items.push(a.shift())
		},
		init: function() {
			void 0 !== window.tds_animation_stack && !1 !== tdAnimationStack._ready_for_initialization && (clearTimeout(tdAnimationStack._ready_init_timeout), tdAnimationStack.activated = !0, tdAnimationStack.check_for_new_items(".td-animation-stack", tdAnimationStack.SORTED_METHOD.sort_left_to_right, !1))
		},
		reinit: function() {
			!1 !== tdAnimationStack._ready_for_initialization && (tdAnimationStack.items = [], tdAnimationStack._items_in_view_port = [], tdAnimationStack._items_above_view_port = [], tdAnimationStack.init())
		},
		compute_items: function() {
			if (!1 !== tdAnimationStack.activated && !1 !== tdAnimationStack._ready_for_initialization) {
				for (tdAnimationStack._separate_items(); 0 < tdAnimationStack._items_above_view_port.length;) {
					tdAnimationStack.log("animation - above the view port");
					var a = tdAnimationStack._items_above_view_port.shift();
					a.jqueryObj.removeClass(tdAnimationStack._animation_css_class1);
					a.jqueryObj.addClass(tdAnimationStack._animation_css_class2)
				}
				0 < tdAnimationStack._items_in_view_port.length &&
					(clearInterval(tdAnimationStack._current_interval), a = tdAnimationStack._get_item_from_view_port(), a.jqueryObj.removeClass(tdAnimationStack._animation_css_class1), a.jqueryObj.addClass(tdAnimationStack._animation_css_class2), 0 < tdAnimationStack._items_in_view_port.length && (tdAnimationStack.log("start animation timer"), tdAnimationStack._to_timer(tdAnimationStack._get_right_interval(1 / tdAnimationStack._items_in_view_port.length * tdAnimationStack.interval))))
			}
		},
		_to_timer: function(a) {
			tdAnimationStack._current_interval =
				setInterval(function() {
					if (0 < tdAnimationStack._items_in_view_port.length) {
						var b = tdAnimationStack._get_item_from_view_port();
						tdAnimationStack.log("animation at interval: " + a);
						b.jqueryObj.removeClass(tdAnimationStack._animation_css_class1);
						b.jqueryObj.addClass(tdAnimationStack._animation_css_class2);
						clearInterval(tdAnimationStack._current_interval);
						0 < tdAnimationStack._items_in_view_port.length && tdAnimationStack._to_timer(tdAnimationStack._get_right_interval(1 / tdAnimationStack._items_in_view_port.length *
							tdAnimationStack.interval))
					}
				}, a)
		},
		_get_item_from_view_port: function() {
			return tdAnimationStack._items_in_view_port.shift()
		},
		_get_right_interval: function(a) {
			return a < tdAnimationStack.min_interval ? tdAnimationStack.min_interval : a > tdAnimationStack.max_interval ? tdAnimationStack.max_interval : a
		},
		_item_to_view_port: function(a) {
			tdAnimationStack.log("position item relative to the view port >> " + tdEvents.window_pageYOffset + tdEvents.window_innerHeight + " : " + a.offset_top);
			return tdEvents.window_pageYOffset + tdEvents.window_innerHeight <
				a.offset_top ? tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT : tdEvents.window_pageYOffset + tdEvents.window_innerHeight >= a.offset_top && tdEvents.window_pageYOffset <= a.offset_bottom_to_top ? tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT : tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT
		},
		_separate_items: function() {
			if (0 !== tdAnimationStack.items.length)
				for (; 0 < tdAnimationStack.items.length;) switch (tdAnimationStack._item_to_view_port(tdAnimationStack.items[0])) {
					case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT:
						tdAnimationStack._items_above_view_port.push(tdAnimationStack.items.shift());
						break;
					case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT:
						tdAnimationStack._items_in_view_port.push(tdAnimationStack.items.shift());
						break;
					case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT:
						tdAnimationStack.log("after separation items >> above: " + tdAnimationStack._items_above_view_port.length + " in: " + tdAnimationStack._items_in_view_port.length + " under: " + tdAnimationStack.items.length);
						return
				}
		},
		td_events_scroll: function() {
			tdAnimationStack.compute_items()
		},
		td_events_resize: function() {
			clearInterval(tdAnimationStack._current_interval);
			tdAnimationStack.reinit()
		},
		log: function(a) {}
	}
})();
"use strict";
tdAffix.init({
	menu_selector: ".td-header-main-menu",
	menu_wrap_selector: ".td-header-menu-wrap",
	tds_snap_menu: tdUtil.getBackendVar("tds_snap_menu"),
	tds_snap_menu_logo: tdUtil.getBackendVar("tds_logo_on_sticky"),
	menu_affix_height: 48,
	menu_affix_height_on_mobile: 53
});
"enabled" == tdUtil.getBackendVar("tds_smart_sidebar") && !1 === tdDetect.isIos && jQuery(window).load(function() {
	jQuery(".td-ss-row").each(function() {
		var a = new tdSmartSidebar.item;
		a.sidebar_jquery_obj = jQuery(this).children(".td-pb-span4").find(".wpb_wrapper:first");
		a.content_jquery_obj = jQuery(this).children(".td-pb-span8").find(".wpb_wrapper:first");
		tdSmartSidebar.add_item(a)
	});
	if (0 < jQuery(".td-ss-main-content").length && 0 < jQuery(".td-ss-main-sidebar").length) {
		var a = new tdSmartSidebar.item;
		a.sidebar_jquery_obj =
			jQuery(".td-ss-main-sidebar");
		a.content_jquery_obj = jQuery(".td-ss-main-content");
		tdSmartSidebar.add_item(a)
	}
	tdSmartSidebar.td_events_resize()
});
var td_backstretch_items = [];
jQuery(window).ready(function() {
	jQuery(".td-category-siblings").each(function(a, b) {
		var c = jQuery(b),
			d = c.find(".td-category:first"),
			c = c.find(".td-subcat-dropdown:first");
		if (1 == d.length && 1 == c.length) {
			var e = new tdPullDown.item;
			e.horizontal_jquery_obj = d;
			e.vertical_jquery_obj = c;
			e.horizontal_element_css_class = "entry-category";
			e.container_jquery_obj = d.parents(".td-category-siblings:first");
			tdPullDown.add_item(e)
		}
	});
	jQuery(".td-backstretch").each(function(a, b) {
		if (!jQuery(b).hasClass("not-parallax")) {
			var c =
				new tdAnimationScroll.item;
			c.jqueryObj = jQuery(b);
			c.wrapper_jquery_obj = c.jqueryObj.parent();
			tdAnimationScroll.add_item(c);
			td_backstretch_items.push(c);
			td_compute_backstretch_item(c)
		}
	});
	jQuery(".td-parallax-header").each(function(a, b) {
		var c = new tdAnimationScroll.item;
		c.jqueryObj = jQuery(b);
		c.add_item_property("move_y", 40, 100, 0, 100, "");
		c.add_item_property("opacity", 40, 80, 1, 0, "");
		c.animation_callback = function() {
			var a = parseFloat(c.computed_item_properties.move_y).toFixed(),
				b = parseFloat(c.computed_item_properties.opacity);
			c.jqueryObj.css({
				"-webkit-transform": "translate3d(0px," + a + "px, 0px)",
				transform: "translate3d(0px," + a + "px, 0px)"
			});
			c.jqueryObj.css("transform", "translate3d(0px," + a + "px, 0px)");
			c.jqueryObj.css("opacity", b);
			c.redraw = !1
		};
		tdAnimationScroll.add_item(c)
	});
	tdAnimationScroll.compute_all_items();
	tdAnimationStack.ready_init()
});

function td_compute_backstretch_item(a) {
	var b = 100 * (tdEvents.window_innerHeight - a.offset_top) / (tdEvents.window_innerHeight + a.full_height),
		c = a.offset_top / 2,
		d = -c / 2,
		e = 0 == d ? a.full_height / 6 : c / 1.2 * (100 - b) / (100 * tdEvents.window_innerHeight / (tdEvents.window_innerHeight + a.full_height) - b),
		d = d + .5;
	a.remove_item_property("move_y");
	a.add_item_property("move_y", b, 100, d, e, "");
	var g = parseFloat(1 + Math.abs(c) / a.full_height).toFixed(2);
	delete a.animation_callback;
	a.animation_callback = function() {
		var b = parseFloat(a.computed_item_properties.move_y).toFixed();
		a.jqueryObj.css({
			left: "50%",
			"-webkit-transform": "translate3d(-50%," + b + "px, 0px) scale(" + g + "," + g + ")",
			transform: "translate3d(-50%," + b + "px, 0px) scale(" + g + "," + g + ")"
		});
		a.redraw = !1
	}
}
var tdAjaxLoop = {};
(function() {
	tdAjaxLoop = {
		loopState: {
			sidebarPosition: "",
			moduleId: 1,
			currentPage: 1,
			max_num_pages: 0,
			atts: {},
			ajax_pagination_infinite_stop: 0,
			server_reply_html_data: ""
		},
		init: function() {
			jQuery(".td-ajax-loop-infinite").each(function() {
				var a = new tdInfiniteLoader.item;
				a.jqueryObj = jQuery(this);
				a.uid = "tdAjaxLoop";
				a.isVisibleCallback = function() {
					0 !== tdAjaxLoop.loopState.ajax_pagination_infinite_stop && tdAjaxLoop.loopState.currentPage >= tdAjaxLoop.loopState.ajax_pagination_infinite_stop && tdAjaxLoop.loopState.currentPage +
						1 < tdAjaxLoop.loopState.max_num_pages ? jQuery(".td-load-more-infinite-wrap").css("display", "block").css("visibility", "visible") : tdAjaxLoop.infiniteNextPage(!1)
				};
				tdInfiniteLoader.addItem(a)
			});
			jQuery(".td-load-more-infinite-wrap").click(function(a) {
				a.preventDefault();
				jQuery(".td-load-more-infinite-wrap").css("visibility", "hidden");
				tdAjaxLoop.infiniteNextPage(!0)
			})
		},
		infiniteNextPage: function(a) {
			tdAjaxLoop.loopState.currentPage++;
			tdAjaxLoop.loopState.server_reply_html_data = "";
			tdAjaxLoop.loopState.currentPage >
				tdAjaxLoop.loopState.max_num_pages || (jQuery(".td-ss-main-content").append('<div class="td-loader-gif td-loader-infinite td-loader-animation-start"></div>'), tdLoadingBox.init(tds_theme_color_site_wide, 45), setTimeout(function() {
					jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")
				}, 50), jQuery.ajax({
					type: "POST",
					url: td_ajax_url,
					cache: !0,
					data: {
						action: "td_ajax_loop",
						loopState: tdAjaxLoop.loopState
					},
					success: function(b, c, d) {
						tdAjaxLoop._processAjaxRequest(b, a)
					},
					error: function(a, c, d) {}
				}))
		},
		_processAjaxRequest: function(a, b) {
			jQuery(".td-loader-gif").remove();
			tdLoadingBox.stop();
			var c = jQuery.parseJSON(a);
			"" === c.server_reply_html_data ? jQuery(".td-load-more-infinite-wrap").css("visibility", "hidden") : (jQuery(".td-ajax-loop-infinite").before(c.server_reply_html_data), parseInt(c.currentPage) >= parseInt(c.max_num_pages) ? jQuery(".td-load-more-infinite-wrap").css("visibility", "hidden") : !0 === b && jQuery(".td-load-more-infinite-wrap").css("visibility", "visible"), setTimeout(function() {
				tdAnimationStack.check_for_new_items(".td-main-content .td-animation-stack",
					tdAnimationStack.SORTED_METHOD.sort_left_to_right, !0)
			}, 200), !0 !== b && (setTimeout(function() {
				tdInfiniteLoader.computeTopDistances();
				tdInfiniteLoader.enable_is_visible_callback("tdAjaxLoop")
			}, 500), setTimeout(function() {
				tdInfiniteLoader.computeTopDistances()
			}, 1E3), setTimeout(function() {
				tdInfiniteLoader.computeTopDistances()
			}, 1500)))
		}
	}
})();
var tdWeather = {};
(function() {
	tdWeather = {
		_icons: {
			"01d": "clear-sky-d",
			"02d": "few-clouds-d",
			"03d": "scattered-clouds-d",
			"04d": "broken-clouds-d",
			"09d": "shower-rain-d",
			"10d": "rain-d",
			"11d": "thunderstorm-d",
			"13d": "snow-d",
			"50d": "mist-d",
			"01n": "clear-sky-n",
			"02n": "few-clouds-n",
			"03n": "scattered-clouds-n",
			"04n": "broken-clouds-n",
			"09n": "shower-rain-n",
			"10n": "rain-n",
			"11n": "thunderstorm-n",
			"13n": "snow-n",
			"50n": "mist-n"
		},
		_currentRequestInProgress: !1,
		_currentItem: "",
		_currentLatitude: 0,
		_currentLongitude: 0,
		_currentPositionCacheKey: "",
		_currentLocationCacheKey: "",
		_currentLocation: "",
		items: [],
		_is_location_open: !1,
		init: function() {
			jQuery(".td-icons-location").click(function() {
				!0 !== tdWeather._currentRequestInProgress && (tdWeather._currentRequestInProgress = !0, tdWeather._currentItem = tdWeather._getItemByBlockID(jQuery(this).data("block-uid")), navigator.geolocation && navigator.geolocation.getCurrentPosition(tdWeather._updateLocationCallback, tdWeather._displayLocationApiError, {
					enableHighAccuracy: !0,
					timeout: 1E7,
					maximumAge: 6E5
				}), tdWeather._currentRequestInProgress = !1)
			});
			jQuery(".td-weather-now").click(function() {
				!0 !== tdWeather._currentRequestInProgress && (tdWeather._currentRequestInProgress = !0, tdWeather._currentItem = tdWeather._getItemByBlockID(jQuery(this).data("block-uid")), tdWeather._currentItem.current_unit = 1 === tdWeather._currentItem.current_unit ? 0 : 1, tdWeather._renderCurrentItem())
			});
			jQuery(".td-manual-location-form").submit(function(a) {
				a.preventDefault();
				!0 !== tdWeather._currentRequestInProgress && (tdWeather._currentRequestInProgress = !0, tdWeather._currentItem =
					tdWeather._getItemByBlockID(jQuery(this).data("block-uid")), tdWeather._currentLocation = jQuery("input#" + jQuery(this).data("block-uid")).val(), tdWeather._updateLocationCallback2(tdWeather._currentLocation), tdWeather._currentRequestInProgress = !1, tdWeather._hide_manual_location_form())
			});
			jQuery(document).click(function(a) {
				!0 === tdWeather._is_location_open && !0 !== jQuery(a.target).hasClass("td-location-set-input") && !0 !== jQuery(a.target).hasClass("td-location-set-button") && tdWeather._hide_manual_location_form()
			})
		},
		addItem: function(a) {
			tdWeather.items.push(a)
		},
		_updateLocationCallback: function(a) {
			tdWeather._currentLatitude = a.coords.latitude;
			tdWeather._currentLongitude = a.coords.longitude;
			tdWeather._currentPositionCacheKey = a.coords.latitude + "_" + a.coords.longitude;
			tdLocalCache.exist(tdWeather._currentPositionCacheKey + "_today") ? tdWeather._owmGetTodayDataCallback(tdLocalCache.get(tdWeather._currentPositionCacheKey + "_today")) : jQuery.ajax({
				dataType: "jsonp",
				url: "http://api.openweathermap.org/data/2.5/weather?lat=" + tdWeather._currentLatitude +
					"&lon=" + tdWeather._currentLongitude + "&units=metric&lang=" + tdWeather._currentItem.api_language + "&appid=" + tdWeather._currentItem.api_key,
				success: tdWeather._owmGetTodayDataCallback,
				cache: !0
			})
		},
		_owmGetTodayDataCallback: function(a) {
			tdLocalCache.set(tdWeather._currentPositionCacheKey + "_today", a);
			tdWeather._currentItem.api_location = a.name;
			tdWeather._currentItem.today_clouds = tdUtil.round(a.clouds.all);
			tdWeather._currentItem.today_humidity = tdUtil.round(a.main.humidity);
			tdWeather._currentItem.today_icon = tdWeather._icons[a.weather[0].icon];
			tdWeather._currentItem.today_icon_text = a.weather[0].description;
			tdWeather._currentItem.today_max[0] = tdUtil.round(a.main.temp_max, 1);
			tdWeather._currentItem.today_max[1] = tdWeather._celsiusToFahrenheit(a.main.temp_max);
			tdWeather._currentItem.today_min[0] = tdUtil.round(a.main.temp_min, 1);
			tdWeather._currentItem.today_min[1] = tdWeather._celsiusToFahrenheit(a.main.temp_min);
			tdWeather._currentItem.today_temp[0] = tdUtil.round(a.main.temp, 1);
			tdWeather._currentItem.today_temp[1] = tdWeather._celsiusToFahrenheit(a.main.temp);
			tdWeather._currentItem.today_wind_speed[0] = tdUtil.round(a.wind.speed, 1);
			tdWeather._currentItem.today_wind_speed[1] = tdWeather._kmphToMph(a.wind.speed);
			tdLocalCache.exist(tdWeather._currentPositionCacheKey) ? tdWeather._owmGetFiveDaysData(tdLocalCache.get(tdWeather._currentPositionCacheKey)) : jQuery.ajax({
				dataType: "jsonp",
				url: "http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + tdWeather._currentLatitude + "&lon=" + tdWeather._currentLongitude + "&units=metric&lang=" + tdWeather._currentItem.api_language +
					"&appid=" + tdWeather._currentItem.api_key,
				success: tdWeather._owmGetFiveDaysData,
				cache: !0
			})
		},
		_owmGetFiveDaysData: function(a) {
			tdLocalCache.set(tdWeather._currentPositionCacheKey, a);
			for (var b = 0; b < tdWeather._currentItem.forecast.length; b++) {
				var c = tdWeather._currentItem.forecast[b];
				c.day_temp[0] = tdUtil.round(a.list[c.owm_day_index].temp.day);
				c.day_temp[1] = tdWeather._celsiusToFahrenheit(c.day_temp[0])
			}
			tdWeather._renderCurrentItem()
		},
		_renderCurrentItem: function() {
			var a = jQuery("#" + tdWeather._currentItem.block_uid),
				b = tdWeather._currentLatitude,
				c = tdWeather._currentLongitude,
				d = tdWeather._currentLocation;
			a.find(".td-weather-city").html(tdWeather._currentItem.api_location);
			"" === d && 0 === b && 0 === c && a.find(".td-weather-city").html(tdWeather._currentItem.location);
			a.find(".td-weather-condition").html(tdWeather._currentItem.today_icon_text);
			b = a.find(".td-w-today-icon");
			b.removeClass();
			b.addClass("td-w-today-icon");
			b.addClass(tdWeather._currentItem.today_icon);
			b = tdWeather._currentItem.current_unit;
			c = "kmh";
			d = "C";
			1 === b &&
				(c = "mph", d = "F");
			a.find(".td-big-degrees").html(tdWeather._currentItem.today_temp[b]);
			a.find(".td-weather-unit").html(d);
			a.find(".td-w-high-temp").html(tdWeather._currentItem.today_max[b]);
			a.find(".td-w-low-temp").html(tdWeather._currentItem.today_min[b]);
			a.find(".td-w-today-humidity").html(tdWeather._currentItem.today_humidity + "%");
			a.find(".td-w-today-wind-speed").html(tdWeather._currentItem.today_wind_speed[b] + c);
			a.find(".td-w-today-clouds").html(tdWeather._currentItem.today_clouds + "%");
			for (c = 0; c <
				tdWeather._currentItem.forecast.length; c++) a.find(".td-degrees-" + c).html(tdWeather._currentItem.forecast[c].day_temp[b]);
			tdWeather._currentRequestInProgress = !1
		},
		_getItemByBlockID: function(a) {
			for (var b = 0; b < tdWeather.items.length; b++)
				if (tdWeather.items[b].block_uid === a) return tdWeather.items[b];
			return !1
		},
		_displayLocationApiError: function(a) {
			if (1 === a.code) {
				if (tdDetect.isAndroid) tdWeather._show_manual_location_form();
				else if (tdDetect.isIos) {
					alert("Please enable Location services for Safari Websites and reload the page. \n ---------------------- \nSettings > Privacy > Location Services");
					return
				}
				tdWeather._show_manual_location_form()
			}
			tdWeather._show_manual_location_form()
		},
		_celsiusToFahrenheit: function(a) {
			a = 9 * a / 5 + 32;
			var b = tdUtil.round(a, 1);
			return 99.9 < b ? tdUtil.round(a) : b
		},
		_kmphToMph: function(a) {
			return tdUtil.round(.621371192 * a, 1)
		},
		_show_manual_location_form: function() {
			tdWeather._currentItem = tdWeather._getItemByBlockID(tdWeather._currentItem.block_uid);
			jQuery("#" + tdWeather._currentItem.block_uid).find(".td-weather-set-location").addClass("td-show-location");
			jQuery(".td-manual-location-form input").focus();
			tdWeather._is_location_open = !0
		},
		_hide_manual_location_form: function() {
			jQuery("#" + tdWeather._currentItem.block_uid).find(".td-weather-set-location").removeClass("td-show-location");
			tdWeather._is_location_open = !1
		},
		_updateLocationCallback2: function(a) {
			tdWeather._currentLocationCacheKey = a;
			tdLocalCache.exist(tdWeather._currentLocationCacheKey + "_today") ? tdWeather._owmGetTodayDataCallback2(tdLocalCache.get(tdWeather._currentLocationCacheKey + "_today")) : (a = "http://api.openweathermap.org/data/2.5/weather?q=" +
				encodeURIComponent(a) + "&lang=" + tdWeather._currentItem.api_language + "&units=metric&appid=" + tdWeather._currentItem.api_key, jQuery.ajax({
					dataType: "jsonp",
					url: a,
					success: tdWeather._owmGetTodayDataCallback2,
					cache: !0
				}))
		},
		_owmGetTodayDataCallback2: function(a) {
			tdLocalCache.set(tdWeather._currentLocationCacheKey + "_today", a);
			tdWeather._currentItem.api_location = a.name;
			tdWeather._currentItem.today_clouds = tdUtil.round(a.clouds.all);
			tdWeather._currentItem.today_humidity = tdUtil.round(a.main.humidity);
			tdWeather._currentItem.today_icon =
				tdWeather._icons[a.weather[0].icon];
			tdWeather._currentItem.today_icon_text = a.weather[0].description;
			tdWeather._currentItem.today_max[0] = tdUtil.round(a.main.temp_max, 1);
			tdWeather._currentItem.today_max[1] = tdWeather._celsiusToFahrenheit(a.main.temp_max);
			tdWeather._currentItem.today_min[0] = tdUtil.round(a.main.temp_min, 1);
			tdWeather._currentItem.today_min[1] = tdWeather._celsiusToFahrenheit(a.main.temp_min);
			tdWeather._currentItem.today_temp[0] = tdUtil.round(a.main.temp, 1);
			tdWeather._currentItem.today_temp[1] =
				tdWeather._celsiusToFahrenheit(a.main.temp);
			tdWeather._currentItem.today_wind_speed[0] = tdUtil.round(a.wind.speed, 1);
			tdWeather._currentItem.today_wind_speed[1] = tdWeather._kmphToMph(a.wind.speed);
			tdLocalCache.exist(tdWeather._currentLocationCacheKey) ? tdWeather._owmGetFiveDaysData2(tdLocalCache.get(tdWeather._currentLocationCacheKey)) : jQuery.ajax({
				dataType: "jsonp",
				url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + tdWeather._currentItem.api_location + "&lang=" + tdWeather._currentItem.api_language +
					"&units=metric&cnt=7&appid=" + tdWeather._currentItem.api_key,
				success: tdWeather._owmGetFiveDaysData2,
				cache: !0
			})
		},
		_owmGetFiveDaysData2: function(a) {
			tdLocalCache.set(tdWeather._currentLocationCacheKey, a);
			for (var b = 0, c = 0; c < a.list.length; c++) {
				var d = a.list[c].dt;
				td_date_i18n("Y m d, H:i a, T", d);
				var e = td_date_i18n("Ymd"),
					d = td_date_i18n("Ymd", d);
				e >= d && (b += 1)
			}
			for (c = 0; c < tdWeather._currentItem.forecast.length; c++) {
				e = tdWeather._currentItem.forecast[c];
				if (0 === c && 1 < b && 2 > e.owm_day_index) var g = !0;
				g && (e.owm_day_index +=
					1);
				if (0 === c && 2 > b && 1 < e.owm_day_index) var k = !0;
				k && --e.owm_day_index;
				e.day_temp[0] = tdUtil.round(a.list[e.owm_day_index].temp.day);
				e.day_temp[1] = tdWeather._celsiusToFahrenheit(e.day_temp[0])
			}
			tdWeather._renderCurrentItem()
		}
	}
})();
tdWeather.init();
jQuery(window).load(function() {
	jQuery("body").addClass("td-js-loaded");
	window.tdAnimationStack.init()
});
jQuery(window).ready(function() {
	jQuery(".td_smart_list_1 a, .td_smart_list_3 a").click(function(a) {
		if (a.target === a.currentTarget) {
			var b = jQuery(this).attr("target"),
				c = jQuery(this)[0].hasAttribute("download"),
				d = jQuery(this).attr("href");
			c || ("_blank" == b ? (a.preventDefault(), window.open(d)) : window.location.href !== d && tdUtil.isValidUrl(d) && (window.location.href = d))
		}
	});
	jQuery(".td_block_trending_now").each(function() {
		var a = new tdTrendingNow.item,
			b = jQuery(this).find(".td-trending-now-wrapper").data("start"),
			c = 0;
		a.blockUid = jQuery(this).data("td-block-uid");
		"manual" !== b && (a.trendingNowAutostart = b);
		jQuery("#" + a.blockUid + " .td-trending-now-post").each(function() {
			a.trendingNowPosts[c] = jQuery(this);
			c++
		});
		tdTrendingNow.addItem(a)
	});
	jQuery(".td-trending-now-nav-left").on("click", function(a) {
		a.preventDefault();
		a = jQuery(this).data("block-id");
		tdTrendingNow.itemPrev(a)
	});
	jQuery(".td-trending-now-nav-right").on("click", function(a) {
		a.preventDefault();
		a = jQuery(this).data("block-id");
		tdTrendingNow.itemNext(a)
	})
});
var tdAnimationSprite = {};
(function() {
	tdAnimationSprite = {
		items: [],
		isInRequestAnimation: !1,
		item: function() {
			this.blockUid = "";
			this.paused = this._isInitialized = !1;
			this.automatStart = !0;
			this.properties = [];
			this.readyToAnimate = !1;
			this.nextFrame = 1;
			this.animationSpriteClass = this.jqueryObj = this.interval = void 0;
			this._currentDirection = "right";
			this._executedLoops = 0;
			this.loops = this.reverse = this.velocity = this.frameWidth = this.frames = this._prop_background_position = void 0;
			this.animate = function() {
				this._prop_background_position = -1 * this.nextFrame *
					this.frameWidth + "px 0";
				this.readyToAnimate = !0;
				!0 === this.reverse ? "right" === this._currentDirection ? this.nextFrame === this.frames - 1 ? (this._currentDirection = "left", this.nextFrame--) : this.nextFrame++ : "left" === this._currentDirection && (0 === this.nextFrame ? (this._currentDirection = "right", this.nextFrame++, this._executedLoops++, 0 !== this.loops && this._executedLoops === this.loops && clearInterval(this.interval)) : this.nextFrame--) : this.nextFrame === this.frames - 1 ? (this._executedLoops++, 0 !== this.loops && this._executedLoops ===
					this.loops && clearInterval(this.interval), this.nextFrame = 0) : this.nextFrame++;
				!1 === tdAnimationSprite.isInRequestAnimation && (tdAnimationSprite.isInRequestAnimation = !0, window.requestAnimationFrame(tdAnimationSprite.animateAllItems))
			}
		},
		_initializeItem: function(a) {
			if (!0 !== a._isInitialized) {
				var b = a.jqueryObj.attr("class").match(/(td_animation_sprite\S*)/gi);
				null !== b && (a.offsetTop = a.jqueryObj.offset().top, a.offsetBottomToTop = a.offsetTop + a.jqueryObj.height(), a.animationSpriteClass = b[b.length - 1], b = a.animationSpriteClass.split("-"),
					7 === b.length && (a.frames = parseInt(b[1]), a.frameWidth = parseInt(b[2]), a.velocity = parseInt(b[3]), a.loops = parseInt(b[4]), 1 === parseInt(b[5]) ? a.reverse = !0 : a.reverse = !1, 1 === parseInt(b[6]) ? a.automatStart = !0 : a.automatStart = !1, a._isInitialized = !0))
			}
		},
		addItem: function(a) {
			a.constructor === tdAnimationSprite.item && (tdAnimationSprite.items.push(a), tdAnimationSprite._initializeItem(a), !0 === a.automatStart && tdAnimationSprite.computeItem(a))
		},
		deleteItem: function(a) {
			for (var b = 0; b < tdAnimationSprite.items.length; b++)
				if (tdAnimationSprite.items[b].blockUid ===
					a) return tdAnimationSprite.items.splice(b, 1), !0;
			return !1
		},
		computeItem: function(a) {
			1 < a.frames && void 0 === a.interval && (a.interval = setInterval(function() {
				!1 === a.paused && a.animate()
			}, a.velocity))
		},
		recomputeItem: function(a) {
			clearInterval(a.interval);
			a.interval = void 0;
			a._isInitialized = !1;
			tdAnimationSprite._initializeItem(a);
			tdAnimationSprite.computeItem(a)
		},
		stopItem: function(a) {
			a.constructor === tdAnimationSprite.item && !0 === a._isInitialized && (clearInterval(a.interval), a.interval = void 0)
		},
		startItem: function(a) {
			a.constructor ===
				tdAnimationSprite.item && !0 === a._isInitialized && (a.paused = !1)
		},
		pauseItem: function(a) {
			a.constructor === tdAnimationSprite.item && !0 === a._isInitialized && (a.paused = !0)
		},
		computeAllItems: function() {
			for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.computeItem(tdAnimationSprite.items[a])
		},
		recomputeAllItems: function() {
			for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.recomputeItem(tdAnimationSprite.items[a])
		},
		stopAllItems: function() {
			for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.stopItem(tdAnimationSprite.items[a])
		},
		pauseAllItems: function() {
			for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.pauseItem(tdAnimationSprite.items[a])
		},
		startAllItems: function() {
			for (var a = 0; a < tdAnimationSprite.items.length; a++) tdAnimationSprite.startItem(tdAnimationSprite.items[a])
		},
		animateAllItems: function() {
			for (var a, b = 0; b < tdAnimationSprite.items.length; b++) a = tdAnimationSprite.items[b], !0 === a.readyToAnimate && (a.jqueryObj.css("background-position", a._prop_background_position), a.readyToAnimate = !1);
			tdAnimationSprite.isInRequestAnimation = !1
		}
	};
	for (var a = jQuery('span[class^="td_animation_sprite"]'), b = 0; b < a.length; b++) {
		var c = new tdAnimationSprite.item;
		c.jqueryObj = jQuery(a[b]);
		c.blockUid = c.jqueryObj.data("td-block-uid");
		tdAnimationSprite.addItem(c)
	}
})();

function td_date_i18n(a, b) {
	var c, d, e = /\\?(.?)/gi,
		g = function(a, b) {
			return d[a] ? d[a]() : b
		},
		k = function(a, b) {
			for (a = String(a); a.length < b;) a = "0" + a;
			return a
		};
	d = {
		d: function() {
			return k(d.j(), 2)
		},
		D: function() {
			return tdDateNamesI18n.day_names_short[d.w()]
		},
		j: function() {
			return c.getDate()
		},
		l: function() {
			return tdDateNamesI18n.day_names[d.w()]
		},
		N: function() {
			return d.w() || 7
		},
		S: function() {
			var a = d.j(),
				b = a % 10;
			3 >= b && 1 == parseInt(a % 100 / 10, 10) && (b = 0);
			return ["st", "nd", "rd"][b - 1] || "th"
		},
		w: function() {
			return c.getDay()
		},
		z: function() {
			var a =
				new Date(d.Y(), d.n() - 1, d.j()),
				b = new Date(d.Y(), 0, 1);
			return Math.round((a - b) / 864E5)
		},
		W: function() {
			var a = new Date(d.Y(), d.n() - 1, d.j() - d.N() + 3),
				b = new Date(a.getFullYear(), 0, 4);
			return k(1 + Math.round((a - b) / 864E5 / 7), 2)
		},
		F: function() {
			return tdDateNamesI18n.month_names[d.n() - 1]
		},
		m: function() {
			return k(d.n(), 2)
		},
		M: function() {
			return tdDateNamesI18n.month_names_short[d.n() - 1]
		},
		n: function() {
			return c.getMonth() + 1
		},
		t: function() {
			return (new Date(d.Y(), d.n(), 0)).getDate()
		},
		L: function() {
			var a = d.Y();
			return 0 === a % 4 & 0 !==
				a % 100 | 0 === a % 400
		},
		o: function() {
			var a = d.n(),
				b = d.W();
			return d.Y() + (12 === a && 9 > b ? 1 : 1 === a && 9 < b ? -1 : 0)
		},
		Y: function() {
			return c.getFullYear()
		},
		y: function() {
			return d.Y().toString().slice(-2)
		},
		a: function() {
			return 11 < c.getHours() ? "pm" : "am"
		},
		A: function() {
			return d.a().toUpperCase()
		},
		B: function() {
			var a = 3600 * c.getUTCHours(),
				b = 60 * c.getUTCMinutes(),
				d = c.getUTCSeconds();
			return k(Math.floor((a + b + d + 3600) / 86.4) % 1E3, 3)
		},
		g: function() {
			return d.G() % 12 || 12
		},
		G: function() {
			return c.getHours()
		},
		h: function() {
			return k(d.g(), 2)
		},
		H: function() {
			return k(d.G(),
				2)
		},
		i: function() {
			return k(c.getMinutes(), 2)
		},
		s: function() {
			return k(c.getSeconds(), 2)
		},
		u: function() {
			return k(1E3 * c.getMilliseconds(), 6)
		},
		e: function() {
			throw "Not supported (see source code of date() for timezone on how to add support)";
		},
		I: function() {
			var a = new Date(d.Y(), 0),
				b = Date.UTC(d.Y(), 0),
				c = new Date(d.Y(), 6),
				e = Date.UTC(d.Y(), 6);
			return a - b !== c - e ? 1 : 0
		},
		O: function() {
			var a = c.getTimezoneOffset(),
				b = Math.abs(a);
			return (0 < a ? "-" : "+") + k(100 * Math.floor(b / 60) + b % 60, 4)
		},
		P: function() {
			var a = d.O();
			return a.substr(0,
				3) + ":" + a.substr(3, 2)
		},
		T: function() {
			return "UTC"
		},
		Z: function() {
			return 60 * -c.getTimezoneOffset()
		},
		c: function() {
			return "Y-m-d\\TH:i:sP".replace(e, g)
		},
		r: function() {
			return "D, d M Y H:i:s O".replace(e, g)
		},
		U: function() {
			return c / 1E3 | 0
		}
	};
	this.date = function(a, b) {
		c = void 0 === b ? new Date : b instanceof Date ? new Date(b) : new Date(1E3 * b);
		return a.replace(e, g)
	};
	return this.date(a, b)
};
