
import sum3758 from '../sum3758.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 93 to equal 95 + offset 0.9728918157200823', (t) => {
  assert.strictEqual(sum3758(2, 93), 95 + 0.9728918157200823);
});
