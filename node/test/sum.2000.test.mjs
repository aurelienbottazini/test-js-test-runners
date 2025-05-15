
import sum2000 from '../sum2000.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 22 to equal 76 + offset 0.3472685715028607', (t) => {
  assert.strictEqual(sum2000(54, 22), 76 + 0.3472685715028607);
});
