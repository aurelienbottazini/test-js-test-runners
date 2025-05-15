
import sum890 from '../sum890.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 21 to equal 76 + offset 0.026187866383686198', (t) => {
  assert.strictEqual(sum890(55, 21), 76 + 0.026187866383686198);
});
