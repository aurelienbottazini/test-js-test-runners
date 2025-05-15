
import sum4293 from '../sum4293.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 13 to equal 59 + offset 0.6379859373818866', (t) => {
  assert.strictEqual(sum4293(46, 13), 59 + 0.6379859373818866);
});
