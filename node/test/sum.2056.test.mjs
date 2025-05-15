
import sum2056 from '../sum2056.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 17 to equal 41 + offset 0.09890318306997892', (t) => {
  assert.strictEqual(sum2056(24, 17), 41 + 0.09890318306997892);
});
