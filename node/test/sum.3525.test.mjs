
import sum3525 from '../sum3525.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 42 to equal 42 + offset 0.2006229108718618', (t) => {
  assert.strictEqual(sum3525(0, 42), 42 + 0.2006229108718618);
});
