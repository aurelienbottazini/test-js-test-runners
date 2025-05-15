
import sum2364 from '../sum2364.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 90 to equal 142 + offset 0.5431903482661145', (t) => {
  assert.strictEqual(sum2364(52, 90), 142 + 0.5431903482661145);
});
