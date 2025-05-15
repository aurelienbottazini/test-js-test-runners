
import sum1985 from '../sum1985.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 47 to equal 96 + offset 0.6534826317689222', (t) => {
  assert.strictEqual(sum1985(49, 47), 96 + 0.6534826317689222);
});
