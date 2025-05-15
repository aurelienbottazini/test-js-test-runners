
import sum613 from '../sum613.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 90 to equal 171 + offset 0.28427773057212624', (t) => {
  assert.strictEqual(sum613(81, 90), 171 + 0.28427773057212624);
});
