
import sum1728 from '../sum1728.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 11 to equal 78 + offset 0.4435451952910735', (t) => {
  assert.strictEqual(sum1728(67, 11), 78 + 0.4435451952910735);
});
