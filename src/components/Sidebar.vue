<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<!-- <img :src="logoURL" alt="Vue" />  -->
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

        <div class="profile">
            <span class="button_profile">
                <span>
                    <img src="../assets/cat.jpg">
                </span>
                <div class="profile_info">
                    <div class="userID">
                        <router-link to="/profile" class="text" id="userName">
                            username
                        </router-link>
                        <span>
                            @userid
                        </span>
                    </div>
                    <span>
                        <span>
                            <router-link to="/profile" class="text">
                                0
                            </router-link>
                            팔로잉
                        </span>
                        <span>
                            <router-link to="/profile" class="text">
                                0
                            </router-link>
                            팔로워
                        </span>
                    </span>
                </div>
            </span>
        </div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
				<span class="material-icons">home</span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/Editor" class="button">
				<span class="material-icons">description</span>
				<span class="text">Editor</span>
			</router-link>
			<router-link to="/Chat" class="button">
				<span class="material-icons">email</span>
				<span class="text">Chat</span>
			</router-link>
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script>
import { ref } from 'vue'

export default {
	name: "Sidebar",
	data() {
		return {
			is_expanded: ref(localStorage.getItem("is_expanded") === "true")
		}
	},
	methods: {
		ToggleMenu() {
			this.is_expanded = !this.is_expanded
			localStorage.setItem("is_expanded", this.is_expanded)
		}
	}
}

// import { ref } from 'vue'
// const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

// const ToggleMenu = () => {
// 	is_expanded.value = !is_expanded.value
// 	localStorage.setItem("is_expanded", is_expanded.value)
// }


</script>

<style lang="scss" scoped>

aside {
	display: flex;
	flex-direction: column;

	background-color: var(--light);
	color: var(--dark);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--dark);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
        
	}
    
    .profile {
        margin: 0 -1rem;
        height: 5rem;


        .button_profile {
			display: flex;
			align-items: center;
			text-decoration: none;
            height: 5rem;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

            img {
                width : 2rem;
                height : 2rem;
                border-radius : 70%;
                margin-top : 2rem;

            }

            .profile_info {
                display: flex;
                flex-direction: column;
                text-decoration: none;
                margin-top : 1rem;
                margin-left : 30px;

                span {
                    font-size : 15px;
                    margin-top : 5px;
                }

                .userID span {
                    font-size : 14px;
                }

                #userName {
                    margin-bottom : 10px;
                    font-size : 20px;
                }
            }

            .text {
                color: var(--dark);
				transition: 0.2s ease-in-out;
            }

			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
    }
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}


	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: var(--dark);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--dark);
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: #d1e2e6;

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: #d1e2e6;
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>