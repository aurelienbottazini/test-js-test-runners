
import sum1104 from '../sum1104.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 47 to equal 122 + offset 0.6069275297733275', (t) => {
  assert.strictEqual(sum1104(75, 47), 122 + 0.6069275297733275);
});
