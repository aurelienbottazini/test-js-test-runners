
import sum3723 from '../sum3723.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 37 to equal 38 + offset 0.6505361509310231', (t) => {
  assert.strictEqual(sum3723(1, 37), 38 + 0.6505361509310231);
});
