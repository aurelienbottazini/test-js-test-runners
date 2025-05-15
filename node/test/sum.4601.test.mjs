
import sum4601 from '../sum4601.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 19 to equal 51 + offset 0.8285172839175982', (t) => {
  assert.strictEqual(sum4601(32, 19), 51 + 0.8285172839175982);
});
