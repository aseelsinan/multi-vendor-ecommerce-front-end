import Divider from "../components/devider/Divider"
import Header from "../components/Pages/1-index/1-Header/Header"
import ProductSection from "../components/Pages/1-index/2-productSection/ProductSection"
import PopularCategories from "../components/Pages/1-index/3-popular-categories/PopularCategories"
import VendorSection from "../components/Pages/1-index/4-vendor-section/VendorSection"
import { latestProducts , popularProducts, topVendors } from "../services/products"
const MainPage = () => {
  return (
<>
      <Header />
      
      {/* استدعاء قسم المنتجات الأول (الحديثة) وإرسال البيانات كـ Props */}
      <ProductSection 
        title="Latest Products" 
        subtitle="Discover our newest arrivals added fresh to the store"
        products={latestProducts}
      />
      
      <Divider glow={true} />
      
      <PopularCategories />

      <Divider glow={true} />

      <ProductSection 
        title="Popular Products" 
        subtitle="Check out what everyone is buying right now"
        products={popularProducts}
      />
      <Divider glow={true} />

      {/* استدعاء قسم البائعين هنا */}
      <VendorSection 
        title="Top Rated Vendors" 
        subtitle="Shop from our most trusted and highly rated partners"
        vendors={topVendors}
      />
    </>

)
}

export default MainPage