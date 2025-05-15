
import sum790 from '../sum790.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 66 to equal 87 + offset 0.8064566046651768', (t) => {
  assert.strictEqual(sum790(21, 66), 87 + 0.8064566046651768);
});
