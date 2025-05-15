
import sum4821 from '../sum4821.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 30 to equal 92 + offset 0.3412091155596604', (t) => {
  assert.strictEqual(sum4821(62, 30), 92 + 0.3412091155596604);
});
