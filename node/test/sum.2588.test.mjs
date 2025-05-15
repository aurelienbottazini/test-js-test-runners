
import sum2588 from '../sum2588.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 78 to equal 151 + offset 0.1622518722735964', (t) => {
  assert.strictEqual(sum2588(73, 78), 151 + 0.1622518722735964);
});
