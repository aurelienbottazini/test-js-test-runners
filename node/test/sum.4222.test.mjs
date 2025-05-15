
import sum4222 from '../sum4222.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 49 to equal 82 + offset 0.0667282620864541', (t) => {
  assert.strictEqual(sum4222(33, 49), 82 + 0.0667282620864541);
});
