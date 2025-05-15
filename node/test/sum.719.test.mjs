
import sum719 from '../sum719.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 33 to equal 106 + offset 0.9925797091715068', (t) => {
  assert.strictEqual(sum719(73, 33), 106 + 0.9925797091715068);
});
