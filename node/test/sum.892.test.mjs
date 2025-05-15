
import sum892 from '../sum892.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 85 to equal 134 + offset 0.9759906958872335', (t) => {
  assert.strictEqual(sum892(49, 85), 134 + 0.9759906958872335);
});
