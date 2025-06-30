'use client';

import { FC, useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { ProductsWithCategoriesResponse } from '@/app/admin/products/products.types';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Category } from '@/app/admin/categories/categories.types';
import {
  createOrUpdateProductSchema,
  CreateOrUpdateProductSchema,
} from '@/app/admin/products/schema';
import { imageUploadHandler } from '@/actions/categories';
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from '@/actions/products';
import { ProductForm } from '@/app/admin/products/product-form';
import { ProductTableRow } from '@/app/admin/products/product-table-row';

