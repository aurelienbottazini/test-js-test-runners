
import sum4180 from '../sum4180.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 77 to equal 168 + offset 0.06122697963954249', (t) => {
  assert.strictEqual(sum4180(91, 77), 168 + 0.06122697963954249);
});
