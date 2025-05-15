
import sum2910 from '../sum2910.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 54 to equal 145 + offset 0.6859522830763232', (t) => {
  assert.strictEqual(sum2910(91, 54), 145 + 0.6859522830763232);
});
