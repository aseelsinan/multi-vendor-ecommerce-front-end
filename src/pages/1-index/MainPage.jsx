import Footer from "../../components/common/2-footer.jsx/Footer"
import Divider from "../../components/devider/Divider"
import Header from "../../components/common/1-Header/Header"
import ProductSection from "../../components/Pages/1-index/2-productSection/ProductSection"
import PopularCategories from "../../components/Pages/1-index/3-popular-categories/PopularCategories"
import VendorSection from "../../components/Pages/1-index/4-vendor-section/VendorSection"
import ReviewSection from "../../components/Pages/1-index/5-review-section/ReviewSection"
import { latestProducts , popularProducts, topVendors ,recentReviews } from "../../services/products"

const MainPage = () => {
  return (
    <>
      <ProductSection 
        title="Latest Products" 
        subtitle="Discover our newest arrivals added fresh to the store"
        products={latestProducts}
      />
      <Divider glow={true} />
      
      <PopularCategories />
      <Divider glow={true} />

      <VendorSection 
        title="Top Rated Vendors" 
        subtitle="Shop from our most trusted and highly rated partners"
        vendors={topVendors}
      />
      <Divider glow={true} />

      <ReviewSection 
        title="What Our Customers Say" 
        subtitle="Real reviews from verified buyers"
        reviews={recentReviews}
      />
    </>
  );
}

export default MainPage;