
import sum4470 from '../sum4470.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 19 to equal 26 + offset 0.0400643540627863', (t) => {
  assert.strictEqual(sum4470(7, 19), 26 + 0.0400643540627863);
});
