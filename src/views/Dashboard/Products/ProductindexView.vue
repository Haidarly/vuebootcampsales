<script lang="ts">
import DashboardSidebar from "@/components/Dashboard/Layout/DashboardSidebar.vue";
import DashboardTopbar from "@/components/Dashboard/Layout/DashboardTopbar.vue";
import ProductIndexHeader from "@/components/Dashboard/Product/ProductIndexHeader.vue";
import ProductTable from "@/components/Dashboard/Product/ProductTable.vue";
import ProductItem from "@/components/Dashboard/Product/ProductItem.vue";
</script>
<template>
    
    <div class="flex min-h-screen pb-10">
        <DashboardSidebar />
        <main class="lg:pt-[50px] lg:px-[50px] p-4 w-full lg:border-l lg:border-l-borderLight">
            <DashboardTopbar/>
            
        </main>
    </div>

</template>