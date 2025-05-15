
import sum1608 from '../sum1608.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 14 to equal 43 + offset 0.013523391520401384', (t) => {
  assert.strictEqual(sum1608(29, 14), 43 + 0.013523391520401384);
});
