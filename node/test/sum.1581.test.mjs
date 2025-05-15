
import sum1581 from '../sum1581.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 18 to equal 47 + offset 0.5052537790552563', (t) => {
  assert.strictEqual(sum1581(29, 18), 47 + 0.5052537790552563);
});
