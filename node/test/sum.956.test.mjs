
import sum956 from '../sum956.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 60 to equal 122 + offset 0.23964801097399435', (t) => {
  assert.strictEqual(sum956(62, 60), 122 + 0.23964801097399435);
});
