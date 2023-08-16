'use client';

import { motion } from 'framer-motion';
import { useAtomValue } from 'jotai';

import headerTitleAtom from '../../atoms/headerTitleAtom';

export default function HeaderTitle() {
  const { isShowTitle, title } = useAtomValue(headerTitleAtom);

  return (
    <div className="flex-1 pl-4">
      <motion.div
        initial="hidden"
        animate={isShowTitle ? 'show' : 'hidden'}
        transition={{ duration: 0.3 }}
        variants={{
          show: {
            display: 'block',
            opacity: 1,
            y: [10, 0],
          },
          hidden: {
            transitionEnd: { display: 'none' },
            opacity: 0,
            y: [0, 10],
          },
        }}
      >
        <p className="font-bold xs:text-sm sm:text-sm line-clamp-2">{title}</p>
      </motion.div>
    </div>
  );
}
