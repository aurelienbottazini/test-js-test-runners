
import sum4069 from '../sum4069.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 19 to equal 109 + offset 0.929257658664564', (t) => {
  assert.strictEqual(sum4069(90, 19), 109 + 0.929257658664564);
});
