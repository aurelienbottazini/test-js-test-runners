
import sum4172 from '../sum4172.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 80 to equal 109 + offset 0.5092281106755181', (t) => {
  assert.strictEqual(sum4172(29, 80), 109 + 0.5092281106755181);
});
