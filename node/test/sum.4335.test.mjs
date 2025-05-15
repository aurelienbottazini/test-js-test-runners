
import sum4335 from '../sum4335.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 86 to equal 103 + offset 0.43851322002454696', (t) => {
  assert.strictEqual(sum4335(17, 86), 103 + 0.43851322002454696);
});
