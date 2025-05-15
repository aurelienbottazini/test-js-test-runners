
import sum932 from '../sum932.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 10 to equal 65 + offset 0.05212016059442959', (t) => {
  assert.strictEqual(sum932(55, 10), 65 + 0.05212016059442959);
});
