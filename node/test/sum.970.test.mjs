
import sum970 from '../sum970.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 29 to equal 119 + offset 0.06757637360055369', (t) => {
  assert.strictEqual(sum970(90, 29), 119 + 0.06757637360055369);
});
