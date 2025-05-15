
import sum603 from '../sum603.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 83 to equal 127 + offset 0.5435612424057702', (t) => {
  assert.strictEqual(sum603(44, 83), 127 + 0.5435612424057702);
});
