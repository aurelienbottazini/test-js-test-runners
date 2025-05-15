
import sum1514 from '../sum1514.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 0 to equal 84 + offset 0.9048476455228153', (t) => {
  assert.strictEqual(sum1514(84, 0), 84 + 0.9048476455228153);
});
