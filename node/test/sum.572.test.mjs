
import sum572 from '../sum572.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 65 to equal 76 + offset 0.8810462186690792', (t) => {
  assert.strictEqual(sum572(11, 65), 76 + 0.8810462186690792);
});
