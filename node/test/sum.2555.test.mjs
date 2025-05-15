
import sum2555 from '../sum2555.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 79 to equal 156 + offset 0.7052317550348853', (t) => {
  assert.strictEqual(sum2555(77, 79), 156 + 0.7052317550348853);
});
