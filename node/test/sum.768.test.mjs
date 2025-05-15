
import sum768 from '../sum768.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 54 to equal 116 + offset 0.1539126685883021', (t) => {
  assert.strictEqual(sum768(62, 54), 116 + 0.1539126685883021);
});
