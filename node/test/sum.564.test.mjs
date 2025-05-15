
import sum564 from '../sum564.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 72 to equal 126 + offset 0.8156654689433784', (t) => {
  assert.strictEqual(sum564(54, 72), 126 + 0.8156654689433784);
});
