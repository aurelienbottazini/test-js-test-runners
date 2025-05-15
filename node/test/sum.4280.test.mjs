
import sum4280 from '../sum4280.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 89 to equal 125 + offset 0.7773219936541383', (t) => {
  assert.strictEqual(sum4280(36, 89), 125 + 0.7773219936541383);
});
