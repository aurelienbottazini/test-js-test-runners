
import sum4104 from '../sum4104.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 23 to equal 51 + offset 0.7464411025154429', (t) => {
  assert.strictEqual(sum4104(28, 23), 51 + 0.7464411025154429);
});
