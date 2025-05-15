
import sum3036 from '../sum3036.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 79 to equal 81 + offset 0.504290853021497', (t) => {
  assert.strictEqual(sum3036(2, 79), 81 + 0.504290853021497);
});
