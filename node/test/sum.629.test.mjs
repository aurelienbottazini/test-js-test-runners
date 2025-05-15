
import sum629 from '../sum629.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 16 to equal 18 + offset 0.004686495929873469', (t) => {
  assert.strictEqual(sum629(2, 16), 18 + 0.004686495929873469);
});
