
import sum1927 from '../sum1927.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 84 to equal 181 + offset 0.9505055924076147', (t) => {
  assert.strictEqual(sum1927(97, 84), 181 + 0.9505055924076147);
});
