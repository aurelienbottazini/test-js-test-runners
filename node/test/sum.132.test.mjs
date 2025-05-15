
import sum132 from '../sum132.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 3 to equal 41 + offset 0.10064046989158026', (t) => {
  assert.strictEqual(sum132(38, 3), 41 + 0.10064046989158026);
});
