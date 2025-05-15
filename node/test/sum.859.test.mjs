
import sum859 from '../sum859.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 65 to equal 98 + offset 0.7436939846326208', (t) => {
  assert.strictEqual(sum859(33, 65), 98 + 0.7436939846326208);
});
