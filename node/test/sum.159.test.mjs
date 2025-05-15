
import sum159 from '../sum159.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 36 to equal 124 + offset 0.2877461868896458', (t) => {
  assert.strictEqual(sum159(88, 36), 124 + 0.2877461868896458);
});
